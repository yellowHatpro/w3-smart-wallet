import { useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import NftCard from "../components/nftCard";

export default function NftsPage() {
  const { contract: collection, isLoading: isCollectionLoading } = useContract(NFT_CONTRACT_ADDRESS)
  const { data: contractMetadata, isLoading: isContractMetadataLoading } = useContractMetadata(collection)
  const { data: nfts, isLoading: nftsLoading, error: nftsError } = useNFTs(collection)
  return (
    <>
      {nftsLoading ? <div className={"w-full h-full min-h-[80vh] flex items-center justify-center"}>Loading</div> : <>
        <div className={"w-full"}>
          <h1 className={"text-xl text-center mb-8"}>{contractMetadata?.name ?? ""}</h1>
          <div className={"flex items-center justify-center"}>
            <div className={"grid grid-cols-3"}>
              {
                nfts?.map((nft, index) => {
                  return ((nft.metadata.id != "4" && nft.metadata.id != "6") &&
                    <NftCard nft={nft} key={index} />)
                })
              }
            </div>
          </div>
        </div>
      </>}
    </>
  )
}
