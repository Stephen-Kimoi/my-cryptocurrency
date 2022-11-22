const { ethers } = require("hardhat"); 

const main = async () => {
  const steveToken = await ethers.getContractFactory("SteveToken"); 
  console.log(steveToken)
  const steveTokenDeploy = await steveToken.deploy("Steve Token", "STK"); 

  await steveTokenDeploy.deployed(); 

  console.log("Contract address: ", steveTokenDeploy.address); 
}

const runMain = async () => {
  try {
    main(); 
    process.exit(0); 
  } catch (error) {
    console.error(error); 
    process.exit(1); 
  }
}

runMain();