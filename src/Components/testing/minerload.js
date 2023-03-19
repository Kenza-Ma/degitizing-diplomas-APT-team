

import { ethers } from "ethers";
import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

//const CONTRACT_ADDRESS_DIP="provide addresss"
const CONTRACT_ADDRESS="0x073c89C055e82BC7da1F93e7dB3AfEc7F4A27210"; //Factory
const CONTRACT_ADDRESS_ASC="0x183b0ce910849f3Ac46491A61972dDB5dF8dB15D"; //adresse storage contract
const UNIVERSITY="0x3819730860392E917B8ae9b14E95751F765b4490";


// to  create a diploma 
export const minerload = async () => {


    // If MetaMask exists
 if (typeof window.ethereum !== "undefined") {
    await window.ethereum.enable();
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const contractASC = await new ethers.Contract(
      CONTRACT_ADDRESS_ASC,
      ASCJSON.abi,
      provider.getSigner()
    );
    try { 

      let currentaddress=await provider.getSigner().getAddress();
        console.log("contract loaded",currentaddress);
        let name=await contractASC.getName(currentaddress);
        let CONTRACT_ADDRESS_DIP=await contractASC.getAddress(provider.getSigner().getAddress());
        console.log('jjj',CONTRACT_ADDRESS_DIP);

        const contract = await new ethers.Contract(
            CONTRACT_ADDRESS_DIP,
            DiplomaJSON.abi,
            provider.getSigner()
          );
          let diplomescount= await contract.getdiplomesCount();
          diplomescount=diplomescount.toNumber();
           console.log(diplomescount);
           //const diploma = await contract.diplomes(0);
           // console.log("hhh",diploma);
          const diplomas = [];
           for (var i = 0; i <diplomescount; i++) {
              const diploma = await contract.diplomes(i);
              diploma[0] = diploma[0].toNumber();
             diplomas.push(diploma);
             console.log(diploma);
             }
        // const name= await contract.getName(provider.getSigner());
        // console.log("name : ",name.toString());
        console.log("contract loaded2",currentaddress,name);

        return {currentaddress,name,diplomas};
    } catch (error) {

      let currentaddress=await provider.getSigner().getAddress();
      console.log("contract loaded",currentaddress);
      let name=await contractASC.getName(UNIVERSITY);
      let CONTRACT_ADDRESS_FAC=await contractASC.getAddress(UNIVERSITY);
      //console.log('jjj',CONTRACT_ADDRESS_FAC);

      const contract = await new ethers.Contract(
          CONTRACT_ADDRESS_FAC,
          FACTORYJSON.abi,
          provider.getSigner()
        );
        let diplomescount= await contract.getdiplomesCount();
        diplomescount=diplomescount.toNumber();
         console.log(diplomescount);
         //const diploma = await contract.diplomes(0);
         // console.log("hhh",diploma);
        const diplomas = [];
         for (var i = 0; i <diplomescount; i++) {
            const diploma = await contract.diptovalidate(i);
            diploma[0] = diploma[0].toNumber();
           diplomas.push(diploma);
           console.log(diploma);
           }

           return {currentaddress,name,diplomas};

      //console.log("Error: ", error);
    }
  }
}


