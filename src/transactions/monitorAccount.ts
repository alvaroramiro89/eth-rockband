import { ethers } from "ethers";
import { config } from "dotenv";

config();

async function monitorAccount(address: string, provider: ethers.Provider) {
  console.log(`Monitoring account: ${address}`);

  const balance = await provider.getBalance(address);
  console.log(`Initial balance: ${ethers.formatEther(balance)} TRBTC`);

  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlock(blockNumber);

  if (block) {
    console.log(`Latest block number: ${block.number}`);
    const txCount = await provider.getTransactionCount(address);
    console.log(`Transaction count: ${txCount}`);
  } else {
    console.log("Unable to fetch latest block");
  }
}

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://public-node.testnet.rsk.co"
  );
  const address = process.env.MONITORED_ADDRESS;

  if (!address) {
    throw new Error("MONITORED_ADDRESS is not set in environment variables");
  }

  await monitorAccount(address, provider);
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
