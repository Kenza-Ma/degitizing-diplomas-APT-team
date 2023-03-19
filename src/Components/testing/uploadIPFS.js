const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const pinataApiKey = 'a93300aa04bbccfa9cb0';
const pinataSecretApiKey = '257b779aa69302a1f52669d1cc9a2002d95c8f200c2e33ebcd9439bbc4e26033';

//**************************************************** The Function that uploads the image file to Pinata IPFS
async function uploadImageToIPFS(imageFilePath) {
  const imageStream = fs.createReadStream(imageFilePath);
  const formData = new FormData();
  formData.append('file', imageStream);

  const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      'pinata_api_key': pinataApiKey,
      'pinata_secret_api_key': pinataSecretApiKey,
    },
  });

  console.log('IPFS URL:', response.data.IpfsHash);      //------------------ IPFS URL
  return response.data.IpfsHash;
}

//*************************************************** The Function that creates the JSON file with the image URL and uploads it
var student_id ="1919"
var  student_fname = "Sara";
var student_lname = "Brahmi";
var student_univ = "USTHB";
var student_major = "SSI";
var issue_date = "24/03/2022";

async function createJsonFile(imageUrl, jsonFileName) {
  const jsonData = {
    imageUrl: imageUrl,
    Student_ID : student_id,
    First_name : student_fname,
    Last_name : student_lname,
    University : student_univ,
    Specialty : student_major,
    Issue_Date : issue_date,

  };

  const jsonString = JSON.stringify(jsonData);
  fs.writeFileSync(jsonFileName, jsonString);

  const jsonStream = fs.createReadStream(jsonFileName);
  const formData = new FormData();
  formData.append('file', jsonStream);

  const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      'pinata_api_key': pinataApiKey,
      'pinata_secret_api_key': pinataSecretApiKey,
    },
  });

  console.log('JSON URL:', response.data.IpfsHash);  // ------------------------ JSON URL
  return response.data.IpfsHash;
}


const imageFilePath = 'diploma_'+student_id+'.png';
const jsonFileName = 'diploma'+student_id+'.json';

//-------------------------------------------- calling the function to upload the image then calling the Json function 
uploadImageToIPFS(imageFilePath)
  .then((imageUrl) => {
    return createJsonFile(imageUrl, jsonFileName);      //---- calling the json function
  })
  .catch((error) => {
    console.error(error);
  });
uploadIPFS.js
3 KB