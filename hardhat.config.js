require("@nomiclabs/hardhat-waffle")
require('dotenv').config()

const URL = process.env.URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  solidity: "0.8.4",
  networks: {
    polygon_mumbai: {
      url: URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
}