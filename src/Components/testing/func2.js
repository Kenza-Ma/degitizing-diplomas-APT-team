import { ethers } from "ethers";
//import DiplomaJSON from "../../ABI/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";
//import { useState } from "react";
//const CONTRACT_ADDRESS="0xeB5AAcE630E762a3257a07Ba1697C849714a2FEb";
const CONTRACT_ADDRESS_ASC="0x183b0ce910849f3Ac46491A61972dDB5dF8dB15D";
export const CreateFactory = async (address_faculty,name) => { 
// If MetaMask exists
 if (typeof window.ethereum !== "undefined") {
    await window.ethereum.enable();
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const contractASC = await new ethers.Contract(
      CONTRACT_ADDRESS_ASC,
      ASCJSON.abi,
      provider.getSigner()
    );
    console.log(await provider.getSigner().getAddress());
   let CONTRACT_ADDRESS= await contractASC.getAddress(await provider.getSigner().getAddress());
console.log(CONTRACT_ADDRESS);
    const contract = await new ethers.Contract(
      CONTRACT_ADDRESS,
      FACTORYJSON.abi,
      provider.getSigner()
    );

  
    try {
        console.log("contract loaded",address_faculty,name);
        //await contract.CreateNewDiploma(address_faculty,name);
        
       // await contract.setNumber(5);

      await contract.CreateNewDiploma(address_faculty,name);
    
  
      let hi=await contractASC.getName(address_faculty);
      console.log(await contractASC.getAddress(address_faculty));
      
    } catch (error) {
      console.log("Error: ", error);
    }


  }
}





export const AddAddressASC = async (address_faculty,name) => { 
    // If MetaMask exists
     if (typeof window.ethereum !== "undefined") {
        await window.ethereum.enable();
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        const contract = await new ethers.Contract(
          CONTRACT_ADDRESS_ASC,
          ASCJSON.abi,
          provider.getSigner()
        );
        try {
            console.log("contract loaded",address_faculty,name);
            await contract.AddAddress(address_faculty,address_faculty,name);
           // await contract.setNumber(5);
        // console.log(await contract.gethello());
          //CreateNewDiploma(address_faculty,name);
          console.log("contract loaded2");
        } catch (error) {
          console.log("Error: ", error);
        }
      }
    }
    

//   export const loadAddressContract = async () => { 
//     //await loadWeb3();
  
//     //const theContract = Contract(ASCJSON); // we gave the ABI of the contract 
//     let contractAddress = "0x98670A7D75C6B311233df95Db10c4FD09Cc6b5ee";
//     //process.env.StorageAddress;
//     let address_contract;
//     const provider = "https://rpc-mumbai.maticvigil.com/";
    
//     //const diplomaContract = await theContract.deployed();
//    //const theContract = new web3.eth.Contract(ASCJSON, contractAddress);
//     const abii=ASCJSON.abi;
//     const addressAccount = await loadAccount();
//     const theContract = await new web3.eth.Contract(abii,contractAddress);
//     theContract.setProvider(provider);
//     const hello=await theContract.methods.getAddress(addressAccount).call()
//     .then((result) => {
//       //console.log(result); 
//       address_contract=result.toString();
//     })
    
  
   
//     return address_contract;
//   };
  
  //////////////////////////////////////////////////////////////////////////////////////
//   export const loadcontractFactory = async () => {
//     await loadWeb3();
//     const provider = "https://rpc-mumbai.maticvigil.com/";
//     const abii=FACTORYJSON.abi;
//     const addressAccount = await loadAccount();
//     let contractAddress=await loadAddressContract();
//     const theContract = await new web3.eth.Contract(abii,contractAddress);
//     theContract.setProvider(provider);
//     return theContract;
//   };
//   //////////////////////////////////////////////////////////////////////
//   // const addnewdipfactory= async (address,name) => {
  
//   //   contract=loadcontractASC();
//   //   contract.methods.CreateNewDiploma(address,name);
   
  
  
//   // }
//   /////////////////////////////////////////////
//   export const CreateFactory= async (address_faculty,name) =>
//   { await loadWeb3();
//      const addressAccount = await loadAccount();
//      console.log(addressAccount);
//      //console.log(addressAccount)
//      let address_contract;
//   const FactoryContract=await loadcontractFactory();
//   await FactoryContract.methods.CreateNewDiploma(address_faculty,name).send({ from: addressAccount });
//   const hello2=await FactoryContract.methods.getAddress("0x08D6418A579dbD18dce55F17aDE5781b57940Cf7").call()
//   .then((result) => {
//     console.log(result); 
//     address_contract=result.toString();
//   })
//   const hello23=await FactoryContract.methods.getName("0x08D6418A579dbD18dce55F17aDE5781b57940Cf7").call()
//   .then((result) => {
//     console.log(result); 
//   })
  
  
//   console.log("dooone");
  
//   }
  
  