# ZKSync MultiChain Transactions

This tutorial focuses on helping developers harness the power of Thirdweb's account abstraction and multi-chain features to create web3 applications that offer an effortless user experience across various EVM-compatible networks. By utilizing multi-chain account abstraction wallets, developers can unlock several benefits, such as:

This tutorial will cover how to set up smart wallets from thirdweb and enable multi-chain support using account abstraction.

Deploying NFT smart contracts:
Deploy an ERC1155 NFT smart contract on different chains (e.g., Base Sepolia and Zksync Sepolia testnet)
Name and add images to the NFTs
Prep NFTs by minting and setting up claim conditions
Building a front-end application using thirdweb Connect SDK:
Create a new Next.js project with thirdweb Connect SDK
Set up the project with a thirdweb API key or client ID
Connect to the application with a smart wallet
Claim different NFTs from different chains to the same wallet address
Deploying smart contracts with deterministic addresses across multiple chains:
Ensure contracts share the same contract address no matter what chain they are on

Seamless cross-chain experiences: Users can switch between different chains without having to worry about managing multiple wallets or addresses.
Support for tokens/NFTs on different chains: Developers can enable users to interact with tokens and NFTs on multiple networks, expanding the functionality and reach of their applications.
Unified in-app wallets: By creating in-app wallets that support multiple chains, developers can provide a cohesive and convenient experience for their users, making it easier for them to manage their digital assets within the application.


## Setup client id

Before you start, you need to replace the placeholder `clientId` with your client ID to use thirdweb SDK.

Refer to [Creating a client](https://portal.thirdweb.com/typescript/v5/client) guide to see how you can get a client id.

Go to `src/client.ts` file and replace the placeholder `clientId` with your client ID.

```ts
const clientId = "......";
```
## Setup NFT SmartContract- EditionDrop
Please head to [link](https://portal.thirdweb.com) and create a edition drop contract for both Base Sepolia and Zksync Sepolia

## Main codebase
1) NFTClaimer.tsx
2) layout.tsx
3) page.tsx

## Kay concepts & Points

1) Deploying two ERC-1155 NFT contracts on Sepolia and Base Sepolia testnets using Thirdweb dashboard.
2) Setting up a Next.js project with Thirdweb's Connect SDK to build a frontend application.
3) Create components to display and claim the deployed NFTs from the respective chains.
4) Enabling account abstraction and multi-chain support using Thirdweb's Connect button, which allows users to have the same wallet address across multiple EVM chains using deterministic deployment.
5) Demonstrate the process of connecting a smart wallet, switching between chains, and claiming NFTs on different chains to the same wallet address. And enjoy the benefits of multi-chain account abstraction wallets, such as enabling seamless cross-chain experiences, supporting tokens/NFTs on different chains, and creating unified in-app wallets for users.

## Usage

### Install dependencies

```bash
npx thirdweb create --app
```
Select Next.JS framework

### Start development server

```bash
yarn dev
```


