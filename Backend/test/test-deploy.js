const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("ChainStamp", () => {
	let ChainStampFactory, chainstamp, sender

	beforeEach(async function () {
		ChainStampFactory = await ethers.getContractFactory("ChainStamp")
		chainstamp = await ChainStampFactory.deploy()
		await chainstamp.waitForDeployment()
		sender = chainstamp.runner.address
	})

	it("test adding new file", async function () {
		await chainstamp.addHash("hash", 1, "name", 10, "type")
		const stamp = await chainstamp.getStamps(sender)
		console.log(stamp[0])

		assert.equal(stamp[0][0], "hash")
		assert.equal(stamp[0][1], 1)
		assert.equal(stamp[0][2], sender)
		assert.equal(stamp[0][3], "name")
		assert.equal(stamp[0][4], 10)
		assert.equal(stamp[0][5], "type")
	})
})
