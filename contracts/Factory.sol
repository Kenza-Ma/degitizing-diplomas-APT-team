pragma solidity ^0.5.0;

import "./Diploma.sol";
import "hardhat/console.sol";
import "./AddressStorageContract.sol";
import "./Factory.sol";

contract Factory {
  struct Diplome {
    //uint id_block;
    uint matricule;
    string nom; 
    string prenom;
    string university;
    string speciality;
    string Date;
    bool added; //esque la transaction est deja ajouté au blockchain ou pas (initialisé tjr par false)
    //mapping(address => bool) isvalidated; //table li fiha chasue address de nos address li lzm yvalidiw w ida ils ont valider wla mzal 
    uint nbvalidation; //nombre de personnes qui ont valider ce diplome (initialisé par 0)
}
Diplome[] diptovalidate;
AddressStorageContract public ASC;
address university;
address ministry;
Diploma[] public DiplomaArray;
address public storageContractAdress;

constructor(address _storageContractAdress, address _ministry, address _university, string memory name) public {
    storageContractAdress = _storageContractAdress;
     ASC = AddressStorageContract(storageContractAdress);
    university=_university;
    ministry = _ministry;
    // ministry=0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    ASC.AddAddress(_university, address(this), name);
  }

  modifier onlyuniv() { 
    require(msg.sender==university, "not university"); 
    _;     
  }

   function CreateNewDiploma(address faculty,string memory name) public {
    Diploma diploma = new Diploma(storageContractAdress, ministry, msg.sender, faculty, name);
    DiplomaArray.push(diploma);
    address dipomaAddress=diploma.getAddress();
    ASC.AddAddress(faculty,dipomaAddress,name);
   }


 function getcontractaddress()
        public
        view
        returns (uint)
    {
        return DiplomaArray.length;
    }


    function AddDiplome(uint matricule,string memory nom,string memory prenom,string memory _university,string memory speciality,string memory date) public{
      Diplome memory d = Diplome (matricule,nom,prenom,_university,speciality,date,false,0);
      // TODO: save diplome struct somewhere
    }

}