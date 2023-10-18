import React from "react";
// import your custom Hook
import NftCard from "./NftCard";
import { useFetchNfts } from "~~/hooks/customHooks/useFetchNfts";
// import your custom Hook
import { useGetOwnersForNfts } from "~~/hooks/customHooks/useGetOwnersForNfts";

export default function NftList(props: any) {
  const contractAddress = props.contractAddress; // get the contract address from props
  const nftsData = useFetchNfts(contractAddress); // call your custom Hook with the contract address
  const owners = useGetOwnersForNfts(contractAddress, nftsData);
  console.log("address");
  console.log(props.address);
  console.log("owners[props.address]");
  console.log(owners[props.address]);

  return (
    <div className="grid grid-cols-2 gap-10">
      {owners[props.address] ? (
        owners[props.address]?.map(
          (
            nft: any,
            i, // map over the nfts array and render each item
          ) => (
            <div key={i}>
              <NftCard nft={nft} />
            </div>
          ),
        )
      ) : (
        <div> No NFTs to show.</div>
      )}
    </div>
  );
}
