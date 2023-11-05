const { ethers } = require("hardhat")

async function main() {
	const ChainStampFactory = await ethers.getContractFactory("ChainStamp")

	console.log("Deploying contract...")
	const chainstamp = await ChainStampFactory.deploy()
	await chainstamp.waitForDeployment()
	console.log(`Deployed contract to: ${chainstamp.target}`)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
