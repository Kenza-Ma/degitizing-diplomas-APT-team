import { ethers } from "ethers";
//import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
//import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

//const CONTRACT_ADDRESS_DIP="provide addresss"
const CONTRACT_ADDRESS="0x073c89C055e82BC7da1F93e7dB3AfEc7F4A27210"; //Factory
const CONTRACT_ADDRESS_ASC="0x781CF50D0e73D7135A8974cc84d8527665678469"; //adresse storage contract



// to  create a diploma 
export const loginmetamask = async () => {


    // If MetaMask exists
 if (typeof window.ethereum !== "undefined") {
    await window.ethereum.enable();
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const contract = await new ethers.Contract(
      CONTRACT_ADDRESS_ASC,
      ASCJSON.abi,
      provider.getSigner()
    );
    try { let currentaddress=await provider.getSigner().getAddress();
        console.log("contract loaded");
        //let name=await contract.getName(currentaddress).toString();
        
        const name= await contract.getName(provider.getSigner());
         console.log("name : ",name.toString());
        console.log("contract loaded2",currentaddress);
        return {currentaddress,name};
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

