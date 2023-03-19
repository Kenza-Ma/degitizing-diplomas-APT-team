require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

 //PRIVATE_KEY = "55db4a47c45fcb0b0081a12b9f98f0111447a716a0043fa051d959fcb076a259"
PRIVATE_KEY = "9383bf259f909229afb17856bc102b11fc2458068ef8785b7de2c96505928eee"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.0",
  networks: { mumbai: { url: "https://rpc-mumbai.maticvigil.com", accounts:[PRIVATE_KEY] } },
  etherscan: { apiKey: { polygonMumbai: "ZKRAPWZB4DBUXXR1NDKYT6K7UZACYHU8AF" } },
  paths: {
    artifacts: "./src/ABI",
  },
}
