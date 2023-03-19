import { ethers } from "ethers";
//import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

//onst CONTRACT_ADDRESS_DIP="provide addresss"
//const CONTRACT_ADDRESS="0xDcA167A4Cb0540712C032a094081c2e4bC2447AD"; //Factory
const CONTRACT_ADDRESS_ASC="0x183b0ce910849f3Ac46491A61972dDB5dF8dB15D"; //adresse storage contract



// to  create a diploma 
export const verify = async (
    matricule
  ) => {

    
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





        const UNIVERSITY="0x3819730860392E917B8ae9b14E95751F765b4490";
    let CONTRACT_ADDRESS_FAC=await contractASC.getAddress(UNIVERSITY);
        //console.log('jjj',CONTRACT_ADDRESS_FAC);
  
        const contract = await new ethers.Contract(
            CONTRACT_ADDRESS_FAC,
            FACTORYJSON.abi,
            provider.getSigner()
          );
        

        console.log("contract loaded");
        let index = await contract.getdiplomeIndex(matricule);
        index = index.toNumber();
        console.log("indexxxx:", index);

        if (index != -1) {
            const diploma = await contract.diptovalidate(index); //blockindex);
            console.log(diploma);

            const lastname = diploma[1].toString();
            const firstname = diploma[2].toString();
            const departement = diploma[3].toString();
            const speciality = diploma[4].toString();
            const date = diploma[5].toString();
            const added = diploma[6].toString();
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
      
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}





    













