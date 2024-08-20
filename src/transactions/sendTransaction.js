import { config } from "dotenv";
import { ethers } from "ethers";

config();

const provider = new ethers.JsonRpcProvider(
  "https://public-node.testnet.rsk.co"
);
const privateKey = process.env.PRIVATE_KEY;
if (!privateKey)
  throw new Error("PRIVATE_KEY is not set in environment variables");
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTransaction() {
  const toAddress = process.env.RECIPIENT_ADDRESS;
  if (!toAddress)
    throw new Error("RECIPIENT_ADDRESS is not set in environment variables");

  console.log("Sender address:", await wallet.getAddress());
  console.log("Recipient address:", toAddress);

  const balance = await provider.getBalance(await wallet.getAddress());
  console.log("Sender balance:", ethers.formatEther(balance), "RBTC");

  const tx = {
    to: toAddress,
    value: ethers.parseEther("0.001"),
    gasPrice: ethers.parseUnits("1", "gwei"),
    gasLimit: 21000,
  };

  console.log("Transaction details:", tx);

  try {
    const transaction = await wallet.sendTransaction(tx);
    console.log("Transaction sent:", transaction.hash);

    console.log("Waiting for transaction confirmation...");
    const receipt = await transaction.wait();
    console.log("Transaction confirmed in block:", receipt.blockNumber);
    return receipt;
  } catch (error) {
    console.error("Error sending transaction:", error);
    throw error;
  }
}

sendTransaction()
  .then((receipt) => console.log("Transaction receipt:", receipt))
  .catch((error) => console.error("Transaction failed:", error));
