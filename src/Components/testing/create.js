import { ethers } from "ethers";
import DiplomaJSON from "../../ABI/contracts/Diploma.sol/Diploma.json";
import ASCJSON from "../../ABI/contracts/AddressStorageContract.sol/AddressStorageContract.json";
import FACTORYJSON from "../../ABI/contracts/Factory.sol/Factory.json";

//const CONTRACT_ADDRESS_DIP="provide addresss"
const CONTRACT_ADDRESS="0xDcA167A4Cb0540712C032a094081c2e4bC2447AD"; //Factory
const CONTRACT_ADDRESS_ASC="0x781CF50D0e73D7135A8974cc84d8527665678469"; //adresse storage contract



// to  create a diploma 
export const create = async (
    matricule,
    nom,
    prenom,
    university,
    speciality,
    date
  ) => {

    const CONTRACT_ADDRESS_ASC="0x47d8C20AC11c1D3747f01FF315177c12d1232E17";
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
        let CONTRACT_ADDRESS_DIP=await contractASC.getAddress(provider.getSigner().getAddress());
        console.log('jjj',CONTRACT_ADDRESS_DIP);

        const contract = await new ethers.Contract(
            CONTRACT_ADDRESS_DIP,
            DiplomaJSON.abi,
            provider.getSigner()
          );
        console.log("contract loaded");
        let diplomescount= await contract.getdiplomesCount();
        diplomescount=diplomescount.toNumber();
         console.log(diplomescount);
        const diplomas = [];
         for (var i = 0; i <diplomescount; i++) {
            const diploma = await contract.diplomes(i);
            diploma[0] = diploma[0].toNumber();
           diplomas.push(diploma);
           }
        
         let newMatricule = await contract.getdiplomeIndex(matricule);
        newMatricule = newMatricule.toNumber();
        if (newMatricule != -1) {
        alert("Diplome Exist");
      } else {console.log("hwereee");
            await contract.createDiplome(
               matricule,
              nom,
              prenom,
              university,
              speciality,
              date
              //{ from: addressAccount }
            );
              console.log("mattt",matricule);

        //     let oldmatricule = await contract.getdiplomeIndex(matricule);
        //     oldmatricule = oldmatricule.toNumber();

        //     if(oldmatricule!=1)
        //     {alert("diploma created succefuly")}
        //   
    }

      console.log("contract loaded2");
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
