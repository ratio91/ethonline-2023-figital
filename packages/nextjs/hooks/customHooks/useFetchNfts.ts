import { useEffect, useState } from "react";
import { alchemy } from "~~/utils/alchemyClient";

export const useFetchNfts = (contractAddress: string) => {
  const [nfts, setNfts] = useState<getNftsForContractResponse>({ nfts: [], pageKey: null });

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

interface getNftsForContractResponse {
  nfts: [];
  pageKey: any;
}
