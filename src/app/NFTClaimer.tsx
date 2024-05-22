
import { client } from "@/app/client";
import { ThirdwebContract } from "thirdweb";
import { balanceOf, getNFT, claimTo } from "thirdweb/extensions/erc1155";
import { useReadContract, MediaRenderer, TransactionButton } from "thirdweb/react";

type NFTClaimerProps = {
    receiverAddress?: string;
    dropContract: ThirdwebContract;
    tokenId: bigint;
};

const NFTClaimer: React.FC<NFTClaimerProps> = (props: NFTClaimerProps) => {
	const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
		contract: props.dropContract,
		tokenId: props.tokenId,
	});
	const { data: ownedNfts } = useReadContract(balanceOf, {
		contract: props.dropContract,
		owner: props.receiverAddress!,
		tokenId: props.tokenId,
		queryOptions: { enabled: !!props.receiverAddress },
	});
	return (
		<div className="flex flex-col my-8">
			{isNftLoading ? (
				<div className="w-full mt-24">Loading...</div>
			) : (
				<>
					{nft ? (
						<MediaRenderer client={client} src={nft.metadata.image} />
					) : null}
					{props.receiverAddress ? (
						<>
							<p className="font-semibold text-center my-2">
								You own {ownedNfts?.toString() || "0"} Kittens on{" "}
								{props.dropContract.chain.name}
							</p>
							<TransactionButton
								transaction={() =>
									claimTo({
										contract:props.dropContract,
										tokenId: props.tokenId,
										to: props.receiverAddress!,
										quantity: 1n,
									})
								}
								onError={(error) => {
									alert(`Error: ${error.message}`);
								}}
								onTransactionConfirmed={async () => {
									alert("Claim successful!");
								}}
							>
								Claim!
							</TransactionButton>
						</>
					) : (
						<p className="text-center mt-8">
							Login to claim this Kitten on {props.dropContract.chain.name}!
						</p>
					)}
				</>
			)}
		</div>
	);
};

export default NFTClaimer;

