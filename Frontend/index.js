import { ethers } from "./ethers-5.7.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
connectButton.onclick = connect

const hashButton = document.getElementById("hashButton")
hashButton.onclick = hash

console.log(ethers)

async function connect() {
	if (typeof window.ethereum !== "undefined") {
		await window.ethereum.request({
			method: "eth_requestAccounts",
		})
		connectButton.innerHTML = "Connected"
	} else {
		connectButton.innerHTML = "Please install Metamask"
	}
}

async function hash() {
	console.log("HASH")
	if (typeof window.ethereum !== "undefined") {
		const file = document.getElementById("myFiles").files[0]
		const infoText = document.getElementById("info")

		infoText.innerHTML = ""

		const formData = new FormData()
		formData.append(file.nam, file)

		console.log(formData)

		const res = fileChecker(file)

		console.log(res)

		if (!res["success"]) {
			infoText.innerHTML = res["message"]
		}

		console.log(
			ethers.utils.computeHmac("sha256", "key", file.data.toString())
		)
	}
}

function fileChecker(file) {
	// ensure a file was submitted
	if (file === undefined) {
		return { success: false, message: "No file submitted." }
	}

	// ensure file is small enough
	if (file.size > 5 * 1024 * 1024) {
		return { success: false, message: "Submitted file over 5 MB." }
	}

	// ensure file has valid extension
	if (!["png", "jpg", "jpeg", "mp4"].includes(file.name.split(".")[1])) {
		return {
			success: false,
			message: "Submitted file has invalid extension.",
		}
	}

	return { success: true, message: "" }
}
