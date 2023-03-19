pragma solidity ^0.5.0;
import "hardhat/console.sol";
import "./AddressStorageContract.sol";
import "./Factory.sol";
contract Diploma {
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
    AddressStorageContract ASC;
    mapping(address => bool) public isOwner;
    mapping(address => mapping(uint => Diplome)) public diplomess;
    mapping(address => uint) public _blockCount;
   Diplome[] public diplomes;
   address public adduniversity;
   address[] public owners; //les addresses des owners (qui doivent valider avant avant executer la transaction (ajouter le diplome a la blockchain))
   //uint public numValidationRequired=2;
    address storageContractAdress;
   event CreateDiplome(
        uint matricule,
        uint indexed blockCount, 
        address indexed owner
    );
    event ValidateDiplome(address indexed owner, uint indexed blockCount);
    event AddDiplome(address indexed owner, uint indexed blockCount,bool added);

    constructor(address _storageContractAdress, address ministry, address university, address faculty, string memory name)
    public {
        storageContractAdress=_storageContractAdress;
         ASC = AddressStorageContract(storageContractAdress);
    owners=[ministry,university,faculty];
    isOwner[ministry]=true;
    isOwner[university]=true;
    isOwner[faculty]=false;
     adduniversity=0x3819730860392E917B8ae9b14E95751F765b4490;
     ASC.AddAddress(faculty, address(this), name);
    // createDiplome(181839024387,"MAAMERi","Kenza","USTHB","SSI","25/03/2022");//,"Informatique");
    // createDiplome(181839024389,"HAICHEUR","Amani","USTHB","SII","25/03/2022");//,"Informatique");
    // createDiplome(181839024388,"BENALLOU","Adel","USTHB","SSI","25/03/2022");//,"Informatique");
    }

 modifier onlyOwner(){ 
        require(isOwner[msg.sender], "not owner");
         _;
    }

//pour verifier que le block sender (message sender) est bien le departement car que lui qui peur creer un diplome!
  modifier onlyfaculty() { 
        require(msg.sender==owners[2], "not faculty"); //reminder : nwerilhom que ca marche pas ki ndirha a 1 then nwerilhom bli tkhrej erreur et ca ne compile pas 
        _; 
    }

  modifier onlyuniversity() { 
        require(msg.sender==owners[1], "not university"); //reminder : nwerilhom que ca marche pas ki ndirha a 1 then nwerilhom bli tkhrej erreur et ca ne compile pas 
        _; 
    }

    modifier diplomeExists(uint matricule) {
        int i = getdiplomeIndex(matricule);
        require(i==-1, "diplome exist"); 
        _;
    }
    
    modifier dipExists(uint _blockCount) {
        require(_blockCount < diplomes.length, "diplome does not exist");
        _;
    }

    modifier notadded(uint _blockCount) {
        require(!diplomes[_blockCount].added, "diplome already validated and added to the blockchain");
     _;
    }

//creating diplome for the first time from the departement
  function createDiplome(uint  matricule,string memory nom,string memory prenom,string memory university,string memory speciality,string memory Date) 
    public
       onlyfaculty
        diplomeExists(matricule)
    {   address UNIVERSITY=0x3819730860392E917B8ae9b14E95751F765b4490;
      uint blockCount =diplomes.length; //nombre de bloc non validé (en attente de validation)
        diplomes.push( Diplome(matricule,nom,prenom,university,speciality,Date,false,0));
        address addresscontractfact=ASC.getAddress(adduniversity);
        Factory univfact=Factory(addresscontractfact);
        univfact.AddDiplome(matricule,nom,prenom,university,speciality,Date);

        emit CreateDiplome(matricule, blockCount ,msg.sender);
  }


//  function addDiplome(uint _blockCount)
//         public
//         onlyOwner
//         dipExists(_blockCount)
//         notadded(_blockCount)
//     { bool _added;
//         Diplome storage diplome = diplomes[_blockCount];

//         require(
//             diplome.nbvalidation >= numValidationRequired,
//             "cannot add diplome"
//         );
//         diplome.added = true;
//         _added=diplome.added;
//         emit AddDiplome(msg.sender, _blockCount,_added);
//     }

 function getOwners() public view returns (address[] memory) {
        return owners;
    }

    function getdiplomesCount() public view returns (uint) {
        return diplomes.length;
    }

    function getdiplome(uint _blockCount)
        public
        view
        returns ( uint matricule, uint nbvalidation,bool added)
    {
        Diplome storage diplome = diplomes[_blockCount];

        return (
            diplome.matricule,
            diplome.nbvalidation,
            diplome.added
        );
    }

    function getdiplomeIndex(uint mmatricule)
        public
        view
        returns (int index)
    { bool x;
    int index=-1;
        Diplome memory diplome;
       if(diplomes.length==0)
       {
           return -1; 
       }
         for (uint i = 0; i < diplomes.length; i++) {
        diplome=diplomes[i];
            if(diplome.matricule==mmatricule)
           {
                 x==true;
                index=int(i);
                return(index);
            }

         }
         return(index);
        
    }

 function getAddress() public view returns (address) {
        return address(this); // returns the address of this contract instance
    }
}