# 🎸 **RockBand Solidity Smart Contract** 🎸

Welcome to the **RockBand** project! This is a smart contract developed on the **Rootstock Network** that allows you to manage a virtual band, adding and removing members, and setting the maximum number of musicians. Let’s dive into the details!

## 🌟 **Core Functionalities**

The RockBand smart contract provides the following key functions:

- **`addMember(string memory _name)`**: Adds a new member to the band.
- **`deleteMember()`**: Removes the oldest member from the band.
- **`getMembers()`**: Returns the list of current band members.
- **`setMaxMembers(uint8 _maxMembers)`**: Sets the maximum number of members allowed in the band.
- **`getMaxMembers()`**: Retrieves the maximum number of members allowed in the band.

## 🌐 **Network: Rootstock Network**

This contract is deployed on the **Rootstock Testnet**. Here's how you can connect to the Rootstock Network using MetaMask:

### 🚀 **How to Connect MetaMask to Rootstock Testnet**

1. **Open MetaMask** and click on the network dropdown at the top.
2. **Select "Add Network"** and enter the following details:

   - **Network Name**: Rootstock Testnet
   - **New RPC URL**: `https://public-node.testnet.rsk.co`
   - **Chain ID**: `31`
   - **Currency Symbol**: `tRBTC`
   - **Block Explorer URL**: `https://explorer.testnet.rootstock.io/`

3. **Save** the settings, and you’re all set!

### 🔗 **Useful Links**

- **Faucet**: Get test RBTC [here](https://faucet.rootstock.io/).
- **Contract Address**: `0x3F2915f410DC0B2eF51b1587E927135582c8C26A`
- **Explorer**: [RockBand Contract on Rootstock Testnet](https://explorer.testnet.rootstock.io/address/0x3f2915f410dc0b2ef51b1587e927135582c8c26a?__ctab=general)

> 🛠️ **Note**: The contract code and ABI are verified and available on the explorer!

## 🛠️ **Node.js Project & Script Interaction**

This project also includes a Node.js environment with scripts to interact with the RockBand contract on the Rootstock Testnet. The scripts allow you to seamlessly communicate with the smart contract functions from your local environment.

### 📜 **Available Scripts**

- **`addMember.ts`**: Adds a new member to the band.
- **`deleteMember.ts`**: Removes the oldest member from the band.
- **`getMembers.ts`**: Retrieves and displays the list of band members.
- **`setMaxMembers.ts`**: Updates the maximum number of members allowed in the band.
- **`getMaxMembers.ts`**: Displays the current maximum number of members.

### 📖 **How to Run Scripts**

To run a script, use the following command structure:

```bash
npm run <script-name> [arguments]
```

Example:

```bash
npm run add-member -- "John Lennon"
```

## 💾 **README File**

This README file is designed to provide an overview of the project, guide you through the setup process, and explain how to interact with the smart contract. It should be saved with the extension `.md` (Markdown) for proper formatting in GitHub or other markdown-supported platforms.

---

Enjoy rocking with your virtual band! 🎶 If you have any questions or issues, feel free to reach out. Happy coding! 🤘

---
