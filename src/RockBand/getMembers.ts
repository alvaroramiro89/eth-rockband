import { ethers } from "ethers";
import contractABI from "../abi/RockBand.json" assert { type: "json" };

async function getMembers() {
  const provider = new ethers.JsonRpcProvider(
    "https://public-node.testnet.rsk.co"
  );

  const contractAddress = "0x3f2915f410dc0b2ef51b1587e927135582c8c26a";
  console.log("Contract address:", contractAddress);

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  try {
    const maxMembers = await contract.getMaxMembers();
    console.log("Max members:", maxMembers);

    const allMembers = await contract.getMembers();
    console.log("All members:", allMembers);
    console.log("Number of members:", allMembers.length);

    if (allMembers.length > 0) {
      console.log("Current band members:");
      allMembers.forEach((member: string, index: number) => {
        console.log(`${index + 1}. ${member}`);
      });
    } else {
      console.log("No members in the band yet.");
    }
  } catch (error) {
    console.error("Error getting members:", error);
  }
}

getMembers();
