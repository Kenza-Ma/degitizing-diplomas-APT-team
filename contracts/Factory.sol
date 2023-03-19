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
Diplome[] public diptovalidate;
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
 modifier onlyuniversity() { 
        require(msg.sender==university, "not university"); //reminder : nwerilhom que ca marche pas ki ndirha a 1 then nwerilhom bli tkhrej erreur et ca ne compile pas 
        _; 
    }
modifier dipExists(uint _blockCount) {
        require(_blockCount < diptovalidate.length, "diplome does not exist");
        _;
    }

    modifier notadded(uint _blockCount) {
        require(!diptovalidate[_blockCount].added, "diplome already validated and added to the blockchain");
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
      diptovalidate.push(d);
    }


    function getdiplomesCount() public view returns (uint) {
        return diptovalidate.length;
    }

//validate the diplom from faculty,rectorat,
function validateDiplome(uint _blockCount)
        public
        onlyuniversity
        dipExists(_blockCount)
        notadded(_blockCount)
    {
        Diplome storage diplome = diptovalidate[_blockCount];
        //AddressStorageContract ASC;
       // diplome.isvalidated[msg.sender] = true;
        diplome.nbvalidation = 1;
        bool _added;
        //address address_ASC=storageContractAdress;
        //contract contractASC;

        if(diplome.nbvalidation ==1)
        {
            diplome.added = true;
            _added=diplome.added;
            ///add it to the mapping of storage contract 
            //ASC =AddressStorageContract(address_ASC);
            //ASC.Add
        }
       
    }

    function getdiplomeIndex(uint mmatricule)
        public
        view
        returns (int index)
    { bool x;
    int index=-1;
        Diplome memory diplome;
       if(diptovalidate.length==0)
       {
           return -1; 
       }
         for (uint i = 0; i < diptovalidate.length; i++) {
        diplome=diptovalidate[i];
            if(diplome.matricule==mmatricule)
           {
                 x==true;
                index=int(i);
                return(index);
            }

         }
         return(index);
        
    }



}