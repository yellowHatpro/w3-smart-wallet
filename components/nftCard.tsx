import Image from "next/image";
import { NFT } from "@thirdweb-dev/sdk";

type NftCardProps = {
  nft: NFT
}

export default function NftCard({nft}: NftCardProps) {
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
        <h1>{"Total Supply:  "}</h1>
        <h1>{nft.supply}</h1>
      </div>
      <button className={"px-6 bg-indigo-300 text-indigo-950 py-2 rounded-md"}>
        Buy
      </button>
    </div>
  )
}
