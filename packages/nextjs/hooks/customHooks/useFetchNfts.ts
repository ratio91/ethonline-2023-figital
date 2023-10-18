import { useEffect, useState } from "react";
import { NftContractNftsResponse } from "alchemy-sdk";
import { alchemy } from "~~/utils/alchemyClient";

export const useFetchNfts = (contractAddress: string) => {
  const [nfts, setNfts] = useState<NftContractNftsResponse>({ nfts: [], pageKey: undefined });

  useEffect(() => {
    const fetchNfts = async () => {
      const nfts = await alchemy.nft.getNftsForContract(contractAddress);
      setNfts(nfts);
    };

    fetchNfts();
  }, [contractAddress]);
  console.log("NFTS");
  console.log(nfts);
  return nfts.nfts;
};
