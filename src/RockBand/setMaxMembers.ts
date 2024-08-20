import { ethers } from "ethers";
import { config } from "dotenv";
import contractABI from "../abi/RockBand.json" assert { type: "json" };

config();

async function setMaxMembers(maxMembers: number) {
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
    const tx = await contract.setMaxMembers(maxMembers);
    await tx.wait();
    console.log(`Max members set to ${maxMembers} successfully`);
  } catch (error) {
    console.error("Error setting max members:", error);
  }
}

// Get the max members value from command line arguments
const maxMembersArg = process.argv[2];

if (!maxMembersArg) {
  console.error("Please provide a max members value as an argument");
  process.exit(1);
}

const maxMembers = parseInt(maxMembersArg, 10);

if (isNaN(maxMembers) || maxMembers < 0 || maxMembers > 255) {
  console.error("Invalid max members value. Please provide a uint8 (0-255)");
  process.exit(1);
}

setMaxMembers(maxMembers);
