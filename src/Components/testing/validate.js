import { ethers } from "ethers";
import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

const CONTRACT_ADDRESS_DIP="provide addresss"
const CONTRACT_ADDRESS="0xDcA167A4Cb0540712C032a094081c2e4bC2447AD"; //Factory
const CONTRACT_ADDRESS_ASC="0x6F8803ff5F059FaF978A22232e03800Eeaa4A23A"; //adresse storage contract



// to  create a diploma 
export const validate = async (matricule) => {


    // If MetaMask exists
 if (typeof window.ethereum !== "undefined") {
    await window.ethereum.enable();
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const contract = await new ethers.Contract(
      CONTRACT_ADDRESS_DIP,
      DiplomaJSON.abi,
      provider.getSigner()
    );
    try {
        console.log("contract loaded");
        const signer=provider.getSigner();
        const address = await signer.getAddress();
        let index = await contract.getdiplomeIndex(matricule);
        index = index.toNumber();
        console.log(index);
        await contract.validateDiplome(index);

 
        const diploma = await contract.diplomes(index); //blockindex);
        //console.log(diploma);
        const nbvalidation = diploma[6].toString();
        console.log(nbvalidation);

      console.log("contract loaded2");
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

