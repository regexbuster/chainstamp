require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const RPC_URL_SEPOLIA = process.env.RPC_URL_SEPOLIA
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		sepolia: {
			url: RPC_URL_SEPOLIA,
			accounts: [PRIVATE_KEY],
			chainId: 11155111,
		},
	},
	solidity: "0.8.19",
}
