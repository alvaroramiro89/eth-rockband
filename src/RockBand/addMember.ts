import { ethers } from "ethers";
import { config } from "dotenv";
import contractABI from "../abi/RockBand.json" assert { type: "json" };

config();

async function addMember(memberName: string) {
  // Connect to the RSK testnet
  const provider = new ethers.JsonRpcProvider(
    "https://public-node.testnet.rsk.co"
  );

  // Replace with your private key
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    throw new Error("Private key is not set in the environment variables");
  }
  const signer = new ethers.Wallet(privateKey, provider);

  // Replace with your deployed contract address
  const contractAddress = "0x3f2915f410dC0b2eF51b1587e927135582C8c26a";

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    const tx = await contract.addMember(memberName);
    await tx.wait();
    console.log(`Member '${memberName}' added successfully`);
  } catch (error) {
    console.error("Error adding member:", error);
  }
}

// Get the member name from command line arguments
const memberName = process.argv[2];

if (!memberName) {
  console.error("Please provide a member name as an argument");
  process.exit(1);
}

addMember(memberName);
