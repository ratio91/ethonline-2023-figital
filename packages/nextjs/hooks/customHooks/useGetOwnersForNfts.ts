import { useEffect, useState } from "react";
import { Nft } from "alchemy-sdk";
import { alchemy } from "~~/utils/alchemyClient";

// define the hook with the signature
export const useGetOwnersForNfts = (contractAddress: string, nfts: Nft[]) => {
  // use useState to store the owners data
  const [owners, setOwners] = useState<Record<string, Nft[]>>({});

  // use useEffect to fetch the owners data for each tokenId
  useEffect(() => {
    // create an async function to fetch the data
    async function fetchOwners() {
      // create an object to store the owners data
      const ownerData: Record<string, Nft[]> = {};
      // loop through the tokenIds array
      for (const nft of nfts) {
        // use alchemy.nft.getOwnersForNft to get the owner of each tokenId
        const data = await alchemy.nft.getOwnersForNft(contractAddress, BigInt(nft.tokenId));
        const owner = data.owners[0];
        // check if the ownerData object already has the owner as a key
        console.log("ONE OWNER");
        console.log(owner);
        if (ownerData[owner]) {
          // if it does, push the tokenId to the array
          ownerData[owner].push(nft);
        } else {
          // if it doesn't, create a new array with the tokenId
          ownerData[owner] = [nft];
        }
      }
      // set the state with the owners data
      setOwners(ownerData);
    }
    // invoke the async function
    fetchOwners();
  }, [contractAddress, nfts]); // use contractAddress and tokenIds as dependencies
  // return the owners state from the hook
  return owners;
};
