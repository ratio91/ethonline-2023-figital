import React, { useEffect, useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";
import NFT from "~~/types/customTypes/nft";

// Define a functional component called NFTCard
// It takes a prop called nft, which is an object containing the NFT data
const NFTCard = ({ nft }: PageProps) => {
  const [buttonText, setButtonText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (nft.contract.address == "0x99a0EEBe6D5Abd437485B2c61522A0E5770fc681".toLowerCase()) {
      setButtonText("Sell on OpenSea");
    } else if (nft.contract.address == "0xffd2c3434b9fdf28051ff79869bbbace646638d8".toLowerCase()) {
      setButtonText("Claim Twin NFT");
    }
  }, []);

  // const { writeAsync: offerItem, isLoading: isLoadingOfferItem, isMining: isMiningOfferItem } = useScaffoldContractWrite({
  const { writeAsync: offerItem } = useScaffoldContractWrite({
    contractName: "TwinERC721",
    functionName: "offerItem",
    args: [BigInt(nft.tokenId)],
    // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
    blockConfirmations: 1,
    // The callback function to execute when the transaction is confirmed.
    onBlockConfirmation: (txnReceipt: any) => {
      //TODO: trigger user feedback
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  // const { writeAsync: claimTwin, isLoading: isLoadingClaimTwin, isMining: isMiningClaimTwin } = useScaffoldContractWrite({
  const { writeAsync: claimTwin } = useScaffoldContractWrite({
    contractName: "TwinERC721",
    functionName: "swapSalesNftToTwinNft",
    args: [BigInt(nft.tokenId)],
    // The number of block confirmations to wait for before considering transaction to be confirmed (default : 1).
    blockConfirmations: 1,
    // The callback function to execute when the transaction is confirmed.
    onBlockConfirmation: (txnReceipt: any) => {
      //TODO: trigger user feedback
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });
  return (
    <div className="w-48 h-full rounded-xl overflow-hidden shadow-lg bg-teal-800 text-center">
      <img className="w-48 h-48 object-cover object-center" src={nft.media[0]?.gateway} alt={nft.title} />
      <p className="font-bold text-l whitespace-normal">{nft.title}</p>
      <p className="text-sm text-base whitespace-normal">{nft.description}</p>
      <div className="flex justify-center">
        <button
          disabled={isLoading}
          onClick={async () => {
            if (nft.contract.address == "0x99a0EEBe6D5Abd437485B2c61522A0E5770fc681".toLowerCase()) {
              setIsLoading(true);
              await offerItem();
              setIsLoading(false);
            } else {
              setIsLoading(true);
              await claimTwin();
              setIsLoading(false);
            }
          }}
          className="flex flex-col items-center mb-1.5"
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <>
              <a className="btn btn-secondary btn-sm">{buttonText}</a>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default NFTCard;

type PageProps = {
  nft: NFT;
};
