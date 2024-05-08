import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  const factory = await ethers.getContractFactory("WrappedSIX");
  const [owner] = await ethers.getSigners();
  const contract = await factory.deploy(1000000000000000);
  
  await contract.deployed();

  console.log("Contract deployed to: ", contract.address);
  console.log("Contract deployed by (Owner): ", owner.address, "\n");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
