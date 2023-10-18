// define an interface for the contract object
interface Contract {
    address: string;
    name: string;
    symbol: string;
    tokenType: string;
    openSea: {
      lastIngestedAt: string;
    };
    contractDeployer: string;
    deployedBlockNumber: number;
  }
  
  // define an interface for the rawMetadata object
  interface RawMetadata {
    metadata: any[];
    attributes: any[];
  }
  
  // define an interface for the NFT object
  export default interface NFT {
    contract: Contract;
    tokenId: string;
    tokenType: string;
    title: string;
    description: string;
    timeLastUpdated: string;
    metadataError?: string; // optional property
    rawMetadata: RawMetadata;
    media: any[];
  }
  