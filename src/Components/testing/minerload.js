

import { ethers } from "ethers";
import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
//import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

//const CONTRACT_ADDRESS_DIP="provide addresss"
//const CONTRACT_ADDRESS="0x073c89C055e82BC7da1F93e7dB3AfEc7F4A27210"; //Factory
const CONTRACT_ADDRESS_ASC="0x47d8C20AC11c1D3747f01FF315177c12d1232E17"; //adresse storage contract



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
    try { let currentaddress=await provider.getSigner().getAddress();
        console.log("contract loaded",currentaddress);
        let name=await contractASC.getName(currentaddress);
        let CONTRACT_ADDRESS_DIP=await contractASC.getAddress(provider.getSigner().getAddress());
        ///console.log('jjj',await CONTRACT_ADDRESS_DIP);

        const contract = await new ethers.Contract(
            CONTRACT_ADDRESS_DIP,
            DiplomaJSON.abi,
            provider.getSigner()
          );
          console.log("XXXXX",contract);
          let diplomescount= await contract.getdiplomesCount();
          diplomescount=diplomescount.toNumber();
           console.log(diplomescount);
          const diplomas = [];
           for (var i = 0; i <diplomescount; i++) {
              const diploma = await contract.diplomes(i);
              diploma[0] = diploma[0].toNumber();
             diplomas.push(diploma);
             console.log(diplomas[i]);
             }
        // const name= await contract.getName(provider.getSigner());
        // console.log("name : ",name.toString());
        console.log("contract loaded2",currentaddress,name);

        return {currentaddress,name,diplomas};
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}


