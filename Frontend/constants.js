export const contractAddress = ""
export const abi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_hash",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_timestamp",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_fileName",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_fileSize",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_fileFormat",
				type: "string",
			},
		],
		name: "addHash",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "addressToStamps",
		outputs: [
			{
				internalType: "string",
				name: "hash",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "unix_timestamp",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "pubkey",
				type: "address",
			},
			{
				internalType: "string",
				name: "fileName",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "fileSize",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "fileFormat",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_pubkey",
				type: "string",
			},
		],
		name: "getStamps",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "hash",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "unix_timestamp",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "pubkey",
						type: "address",
					},
					{
						internalType: "string",
						name: "fileName",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "fileSize",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "fileFormat",
						type: "string",
					},
				],
				internalType: "struct ChainStamp.Stamp[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
]
