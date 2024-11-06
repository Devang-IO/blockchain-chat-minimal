const hre = require("hardhat");

async function main() {
  const ChatApp = await hre.ethers.getContractFactory("ChatApp");
  const chatApp = await ChatApp.deploy();

  await chatApp.deployed();

  console.log(`ChatApp deployed to ${chatApp.address}`);
  
  // Update the frontend contract address
  const fs = require('fs');
  const path = require('path');
  
  const contractsDir = path.join(__dirname, '..', 'src', 'contracts');
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  
  fs.writeFileSync(
    path.join(contractsDir, 'contract-address.json'),
    JSON.stringify({ ChatApp: chatApp.address }, undefined, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });