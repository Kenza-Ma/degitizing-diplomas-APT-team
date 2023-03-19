// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const addressASC='0x4E968a1DDE1F2dc26Ff6Ef12fa5364805B34a9BF';
  const address1= "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const address2="0x3819730860392E917B8ae9b14E95751F765b4490";
  const address3="0x91b18eE25c4B1AD4BF93d8d7a648902cd0f84429";
//   const { ethers } = require("ethers");

// const provider = new ethers.providers.JsonRpcProvider(); // replace with your preferred provider
// const privateKey = "0x..."; // replace with your private key
// const signer = new ethers.Wallet(privateKey, provider);
  const Diploma = await hre.ethers.getContractFactory("Diploma");
  const diploma = await Diploma.deploy(addressASC,address1,address2,address3,"university");

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
