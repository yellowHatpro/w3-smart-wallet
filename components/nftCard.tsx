import Image from "next/image";
import { NFT } from "@thirdweb-dev/sdk";
import { useAddress, Web3Button } from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../constants/addresses";

type NftCardProps = {
  nft: NFT,
}

export default function NftCard({nft}: NftCardProps) {
  const address = useAddress() ?? ""
  // I effin messed up while uploading these two sowwyyyy
  return (
    <div className={"border-2 flex flex-col m-2 w-fit p-2 items-center justify-between"}>
      <h1 className={"p-2"}>{nft.metadata.name}</h1>
      <h1 className={"p-2"}>{nft.metadata.description}</h1>
      <Image src={nft.metadata.image ?? ""}
             alt={""}
             height={250}
             width={250} />
      <div className={"flex"}>
        <h1>{"Total sold:  "}</h1>
        <h1>{nft.supply}</h1>
      </div>
      <Web3Button
        contractAddress={NFT_CONTRACT_ADDRESS}
        action={async (contract)=> await
          contract.erc1155.claimTo(address,nft.metadata.id,1).then()}
        className={"px-6 bg-indigo-300 text-indigo-950 py-2 rounded-md"}>
        Claim
      </Web3Button>
    </div>
  )
}
