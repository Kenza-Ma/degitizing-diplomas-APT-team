//import DiplomaJSON from "../../ABI/Diploma.json";
//import ASCJSON from "../../ABI/AddressStorageContract.json";
//import FACTORYJSON from "../../ABI/Factory.json";
import Web3 from "web3";
require('dotenv').config();
//const contract = require("@nomiclabs/hardhat-etherscan");
///// it loads the diploma contract 
//////////////////////////////////////////////////////////////////////////////////
export const load = async () => {
  await loadWeb3();
  const addressAccount = await loadAccount();
  const { diplomaContract, diplomas,name2 } = await loadContract(addressAccount);

  return { addressAccount, diplomaContract, diplomas,name2};
};
//////////////////////////////////////////////////////////// to login
export const loginmetamask = async () => {
  await loadWeb3();
  const addressaccount = await loadAccount();
  const contractAddress = "0x98670A7D75C6B311233df95Db10c4FD09Cc6b5ee";
  //process.env.StorageAddress;
  const provider = "https://rpc-mumbai.maticvigil.com/";
  const abii=ASCJSON.abi;
   const theContract = new web3.eth.Contract(abii,contractAddress);
  theContract.setProvider(provider);
  const name =theContract.methods.getName(addressaccount).call()
  .then((name) => {
    console.log(name); // should output "hello"
  })

  return {addressaccount};
};
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////

export const loadAddressContract = async () => { 
  await loadWeb3();

  //const theContract = Contract(ASCJSON); // we gave the ABI of the contract 
  let contractAddress = "0x98670A7D75C6B311233df95Db10c4FD09Cc6b5ee";
  //process.env.StorageAddress;
  let address_contract;
  const provider = "https://rpc-mumbai.maticvigil.com/";
  
  //const diplomaContract = await theContract.deployed();
 //const theContract = new web3.eth.Contract(ASCJSON, contractAddress);
  const abii=ASCJSON.abi;
  const addressAccount = await loadAccount();
  const theContract = await new web3.eth.Contract(abii,contractAddress);
  theContract.setProvider(provider);
  const hello=await theContract.methods.getAddress(addressAccount).call()
  .then((result) => {
    //console.log(result); 
    address_contract=result.toString();
  })
  const hello2=await theContract.methods.getAddress("0x08D6418A579dbD18dce55F17aDE5781b57940Cf7").call()
  .then((result) => {
    console.log(result); 
    address_contract=result.toString();
  })
  const hello23=await theContract.methods.getName("0x08D6418A579dbD18dce55F17aDE5781b57940Cf7").call()
  .then((result) => {
    console.log(result); 
  })

 
  return address_contract;
};

//////////////////////////////////////////////////////////////////////////////////////
export const loadcontractFactory = async () => {
  await loadWeb3();
  const provider = "https://rpc-mumbai.maticvigil.com/";
  const abii=FACTORYJSON.abi;
  const addressAccount = await loadAccount();
  let contractAddress=await loadAddressContract();
  const theContract = await new web3.eth.Contract(abii,contractAddress);
  theContract.setProvider(provider);
  return theContract;
};
//////////////////////////////////////////////////////////////////////
// const addnewdipfactory= async (address,name) => {

//   contract=loadcontractASC();
//   contract.methods.CreateNewDiploma(address,name);
 


// }
/////////////////////////////////////////////
export const CreateFactory= async (address_faculty,name) =>
{ await loadWeb3();
   const addressAccount = await loadAccount();
   console.log(addressAccount);
   //console.log(addressAccount)
   let address_contract;
const FactoryContract=await loadcontractFactory();
await FactoryContract.methods.CreateNewDiploma(address_faculty,name).send({ from: addressAccount });
const hello2=await FactoryContract.methods.getAddress("0x08D6418A579dbD18dce55F17aDE5781b57940Cf7").call()
.then((result) => {
  console.log(result); 
  address_contract=result.toString();
})
const hello23=await FactoryContract.methods.getName("0x08D6418A579dbD18dce55F17aDE5781b57940Cf7").call()
.then((result) => {
  console.log(result); 
})


console.log("dooone");

}












































//////////////////// here we used web3 to load the contract par contre we didn't use loginmetamask psq we don't have to login to verify 
export const verify = async (matricule) => {
  await loadWeb3();
  const diplomaContract = await loadcontract2();
  let index = await diplomaContract.getdiplomeIndex(matricule);
  index = index.toNumber();
  console.log("indexxxx:", index);
  if (index != -1) {
    const diploma = await diplomaContract.diplomes(index); //blockindex);
    console.log(diploma);
    const added = diploma[6].toString();
    const lastname = diploma[1].toString();
    const firstname = diploma[2].toString();
    const speciality = diploma[4].toString();
    const departement = diploma[3].toString();
    const date = diploma[5].toString();
    if (added === "true") {
      alert(
        "Student : " +
          lastname +
          " " +
          firstname +
          "\nDepartment : " +
          departement +
          "\nDegree : " +
          speciality +
          "\nDate : " +
          date +
          "\nStatus : verified "
      );
    } else {
      alert(
        "Student : " +
          lastname +
          " " +
          firstname +
          "\nDepartment : " +
          departement +
          "\nDegree : " +
          speciality +
          "\nDate : " +
          date +
          "\nStatus : not verified "
      );
    }
  } else {
    alert("Diploma does not exist ");
  }
};
////////////////////////////////////////////////////////////////////////////////////////
export const validate = async (matricule) => {
  await loadWeb3();
  const diplomaContract = await loadcontract2();
  const addressAccount = await loadAccount();
  let index = await diplomaContract.getdiplomeIndex(matricule);
  index = index.toNumber();
  console.log(index);
  await diplomaContract.validateDiplome(index, { from: addressAccount });

  //const diploma = await diplomaContract.diplomes(index); //blockindex);
  //console.log(diploma);
  //const nbvalidation = diploma[6].toString();
  //console.log(nbvalidation);
};
 

// to  create a diploma 
export const create = async (
  matricule,
  nom,
  prenom,
  university,
  speciality,
  date
) => {
  await loadWeb3();
  const diplomaContract = await loadcontract2();
  const addressAccount = await loadAccount();
  const diplomes = await loadDiploma(diplomaContract, addressAccount);
  let excep = await diplomaContract.getdiplomeIndex(matricule);
  excep = excep.toNumber();

  console.log("indeeexxxxxxx ida y'exister :", excep);

  if (excep != -1) {
    alert("Diplome Exist");
  } else {
    await diplomaContract.createDiplome(
      matricule,
      nom,
      prenom,
      university,
      speciality,
      date,
      { from: addressAccount }
    );
    excep = await diplomaContract.getdiplomeIndex(matricule);
    excep = excep.toNumber();

    console.log("indeeexxxxxxx ida y'exister :", excep);

    if (excep != -1) {
      alert("Diplome created successfuly");
    }
  }
};
 ///// we're loading the contract here 
const loadcontract2 = async () => {
  let abii=DiplomaJSON.abi;
  await loadWeb3();
  const provider = "https://rpc-mumbai.maticvigil.com/";
  const theContract = Contract(abii); // lzm nziddd the contract address
  theContract.setProvider(provider);
  const diplomaContract = await theContract.deployed();
  return diplomaContract;
};



//////////////////////////////////////////////////////////////////////////////////////





/// recuperer la liste des diplomes de la smart contract 
const loadDiploma = async (diplomaContract, addressAccount) => {
  let diplomacount = await diplomaContract.methods.getdiplomesCount().call()
  .then((result) => {
    console.log(result); 
    const diplomacount=result;// should output "hello"
  });
  
  // console.log("11", diplomacount);
  // diplomacount = diplomacount.toNumber();
  // console.log("22", diplomacount);
  // const diplomas = [];
  // for (var i = 0; i < diplomacount; i++) {
  //   const diploma = await diplomaContract.diplomes(i);
  //   diploma[0] = diploma[0].toNumber();
  //   diplomas.push(diploma);
  // }
  //return diplomas;
};

///to load the contract 
const loadContract = async (addressAccount) => {
  //const theContract = contract(DiplomaJSON);
   const provider = "https://rpc-mumbai.maticvigil.com/";
  
  //const diplomaContract = await theContract.deployed();
 //const theContract = new web3.eth.Contract(ASCJSON, contractAddress);
  const abii=DiplomaJSON.abi;
   const theContract = new web3.eth.Contract(abii,"0x938158e223f846096cC89B80D626EcDCb4DdB25C");
  theContract.setProvider(provider);
 // theContract.setProvider(web3.eth.currentProvider);
  //const diplomaContract = await theContract.deployed();
  const diplomas = await loadDiploma(theContract, addressAccount);
  const contractAddress = "0x98670A7D75C6B311233df95Db10c4FD09Cc6b5ee";
  //process.env.StorageAddress;
  let name2;
  const addressaccount = await loadAccount();
  const abii2=ASCJSON.abi;
   const theContract2 = new web3.eth.Contract(abii2,"0x98670A7D75C6B311233df95Db10c4FD09Cc6b5ee");
  theContract2.setProvider(provider);
  const name =await theContract2.methods.getName(addressaccount).call()
  .then((result) => {
    console.log(result); // should output "hello"
     name2=result.toString();
     //console.log('name');
     //console.log(name2);
  })
  console.log('name');
console.log(name2);
  return { theContract, diplomas ,name2};
};

// to get the account address 
const loadAccount = async () => {
  await loadWeb3;
  const addressAccount = await web3.eth.getCoinbase();
  console.log("XXXXXX");
  const privateKey = '55db4a47c45fcb0b0081a12b9f98f0111447a716a0043fa051d959fcb076a259';
const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;
  //web3.eth.defaultAccount="0x08D6418A579dbD18dce55F17aDE5781b57940Cf7";
  console.log(web3.eth.defaultAccount);
  return addressAccount;
};


//// load web3 so that we can load the contract 
const loadWeb3 = async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await eth_requestAccounts();
      // Acccounts now exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    const provider = "https://rpc-mumbai.maticvigil.com/";
    //theContract.setProvider(provider);
    window.web3 = new Web3(provider);
    // Acccounts always exposed
    web3.eth.sendTransaction({
      /* ... */
    });
  }
  // Non-dapp browsers...
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
