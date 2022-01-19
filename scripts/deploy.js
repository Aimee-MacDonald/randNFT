const hre = require("hardhat")

async function main() {
  const RandNFT = await hre.ethers.getContractFactory('RandNFT')
  const randNFT = await RandNFT.deploy()
  await randNFT.deployed()

  console.log("RandNFT deployed to:", randNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
