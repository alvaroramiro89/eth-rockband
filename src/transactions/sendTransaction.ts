import { config } from "dotenv";
import { ethers } from "ethers";

config();

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://public-node.testnet.rsk.co"
  );

  console.log("Connecting to network...");
  const network = await provider.getNetwork();
  console.log(
    "Connected to network:",
    process.env.RSK_NODE,
    "Chain ID:",
    network.chainId
  );

  const blockNumber = await provider.getBlockNumber();
  console.log("Current block number:", blockNumber);

  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey)
    throw new Error("PRIVATE_KEY is not set in environment variables");
  const wallet = new ethers.Wallet(privateKey, provider);

  const senderAddress = await wallet.getAddress();
  console.log("Sender address:", senderAddress);

  const balance = await provider.getBalance(senderAddress);
  console.log("Sender balance:", ethers.formatEther(balance), "RBTC");

  const toAddress = process.env.RECIPIENT_ADDRESS;
  if (!toAddress)
    throw new Error("RECIPIENT_ADDRESS is not set in environment variables");

  const tx: ethers.TransactionRequest = {
    to: toAddress,
    value: ethers.parseEther("0.001"),
  };

  console.log("Sending transaction...");
  const transaction = await wallet.sendTransaction(tx);
  console.log("Transaction sent:", transaction.hash);

  console.log("Waiting for transaction confirmation...");
  const receipt = await transaction.wait();
  console.log("Transaction confirmed in block:", receipt?.blockNumber);
  console.log("Transaction receipt:", receipt);

  // Verify the transaction
  console.log("Verifying transaction...");
  const txResponse = await provider.getTransaction(transaction.hash);
  if (txResponse) {
    console.log("Transaction found on the network");
    console.log("Transaction details:", txResponse);
  } else {
    console.log("Transaction not found on the network");
  }
}

main().catch((error: Error) => {
  console.error("An error occurred:", error);
});
