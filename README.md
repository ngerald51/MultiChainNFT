# ZKSync MultiChain Transactions

This tutorial focuses on helping developers harness the power of Thirdweb's account abstraction and multi-chain features to create web3 applications that offer an effortless user experience across various EVM-compatible networks. By utilizing multi-chain account abstraction wallets, developers can unlock several benefits, such as:

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


