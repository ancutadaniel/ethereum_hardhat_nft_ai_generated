const hre = require("hardhat");

async function main() {
  const DacetherCollection = await hre.ethers.getContractFactory("DacetherCollection");
  const dacetherCollection = await DacetherCollection.deploy();

  await dacetherCollection.deployed();

  console.log("AI NFT collection is deployed to:", dacetherCollection.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
