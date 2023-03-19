import { ethers } from "ethers";
import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

//const CONTRACT_ADDRESS_DIP="provide addresss"
const CONTRACT_ADDRESS="0xDcA167A4Cb0540712C032a094081c2e4bC2447AD"; //Factory
const CONTRACT_ADDRESS_ASC="0x183b0ce910849f3Ac46491A61972dDB5dF8dB15D"; //adresse storage contract



// to  create a diploma 
export const validate = async (matricule) => {
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const contractASC = await new ethers.Contract(
    CONTRACT_ADDRESS_ASC,
    ASCJSON.abi,
    provider.getSigner()
  );
  
  const UNIVERSITY="0x3819730860392E917B8ae9b14E95751F765b4490";
  let CONTRACT_ADDRESS_FAC=await contractASC.getAddress(UNIVERSITY);
      //console.log('jjj',CONTRACT_ADDRESS_FAC);

      const contract = await new ethers.Contract(
          CONTRACT_ADDRESS_FAC,
          FACTORYJSON.abi,
          provider.getSigner()
        );
      
    // If MetaMask exists
 if (typeof window.ethereum !== "undefined") {
    await window.ethereum.enable();
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const contract = await new ethers.Contract(
      CONTRACT_ADDRESS_FAC,
      FACTORYJSON.abi,
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

 
        const diploma = await contract.diptovalidate(index); //blockindex);
        //console.log(diploma);
        const nbvalidation = diploma[6].toString();
        console.log(nbvalidation);

      console.log("contract loaded2");
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}

