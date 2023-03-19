// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const MINISTRY = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const UNIVERSITY = "0x3819730860392E917B8ae9b14E95751F765b4490";
  const FACULTY = "0x91b18eE25c4B1AD4BF93d8d7a648902cd0f84429";

  // Deploy storage contract
  const AddressStorageContract = await hre.ethers.getContractFactory("AddressStorageContract");
  const addressStorageContract = await AddressStorageContract.deploy();
   await addressStorageContract.deployed();
  console.log("AddressStorageContract deployed to:", addressStorageContract.address);

  // Deploy factory contract
  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy(addressStorageContract.address, MINISTRY, UNIVERSITY,"USTHB");
  await factory.deployed();
  console.log("factory deployed to:", factory.address);
  console.log('npx hardhat verify --network mumbai', factory.address ,addressStorageContract.address, MINISTRY, UNIVERSITY,"USTHB" );

  // Deploy diploma contract
  const Diploma = await hre.ethers.getContractFactory("Diploma");
  const diploma = await Diploma.deploy(addressStorageContract.address, MINISTRY, UNIVERSITY, FACULTY, "university");
  await diploma.deployed();
  console.log(
  `diploma deployed to ${diploma.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
