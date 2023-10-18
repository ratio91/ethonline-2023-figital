import { MetaHeader } from "~~/components/MetaHeader";
import NftList from "~~/components/NftList"

const Home = ({ address }: PageProps) => {

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Figitalism</span>
          </h1>
        </div>
        {
          address ? (
            <div>
            <span className="block text-1xl font-bold mb-5 mt-10">Items ready for sale:</span>
            <NftList address={address} contractAddress='0x99a0EEBe6D5Abd437485B2c61522A0E5770fc681' />
            <span className="block text-1xl font-bold mb-5 mt-10">Twin NFTs ready to claim:</span>
            <NftList address={address} contractAddress='0xFfD2c3434b9FdF28051ff79869BbBACE646638d8' />
          </div>) : (
            <span className="block text-1xl font-bold mb-5 mt-10">Connect your wallet to get started.</span>

          )
        }

      </div>
    </>
  );
};

export default Home;

type PageProps = {
  address: string;
};