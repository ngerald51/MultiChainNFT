'Import both frontend modules and integration modules from thirdweb SDK
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import {defineChain, getContract } from "thirdweb";
import { client } from "./client";
import { useActiveAccount } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";

'Main Smart Contract logic component 
import NFTClaimer from "../../components/NFTClaimer";

export default function Home() {
const account = useActiveAccount();

'Created Smart Contract on ThirdWeb Platform
const sepoliaContract = getContract({
  client: client,
  address: "0x4ff6745A43ad216D163DD3BC56D783da72d35FFE",
  chain: defineChain(baseSepolia),
});

const zksyncContract = getContract({
  client: client,
  address: "0x867D31aF8a012905c26B2BE6E270A1892BAd1231",
  chain: defineChain(300),
});

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibod  md:font-bold tracking-tighter mb-12">MultChain 
        <br />
    Sponsored Transactions
        </h1>

<ConnectButton
  client={client}
  accountAbstract ={{
    chain: baseSepolia,
    sponsorGas: true,
  }}
/>

<div className="flex flex-row">
<NFTClaimer 
    receiverAddress={account?.address}
    dropContract={sepoliaContract}
    tokenId={0n}
    />
  <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8" />
    <NFTClaimer 
    receiverAddress={account?.address}
    dropContract={zksyncContract}
    tokenId={0n}
    />


</div>

   
        
      </div>
    </main>
  );
}

