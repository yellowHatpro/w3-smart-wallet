import Image from "next/image";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";

type CollectionCardProps = {
  name: string | undefined,
  description: string | undefined,
  symbol: string | undefined,
  total: BigNumber | undefined,
  image: string | undefined,
  isLoading: boolean
}
export default function CollectionCard({name, description, symbol, total, image, isLoading}: CollectionCardProps) {
  const router = useRouter()
  const totalSupply = total?.toNumber() ?? 2 // coz I am stupid and uploaded 2 wrong ones
  return (
    <div className={"flex flex-row border-2 w-fit rounded-md min-w-64 min-h-72"}>
      {
        isLoading ? <div className={"flex w-full justify-center items-center"}>
          Loading
        </div> : <>
          <div className={"flex flex-col w-full justify-center items-center"}>
            <div className={"flex p-2 w-full items-center justify-center"}>
              <Image src={image ?? ""}
                     alt={""}
                     width={250}
                     height={250} />
            </div>
            <div className={"p-2"}>
              <h1 className={"mb-4"}>{`${name} (${symbol})`}</h1>
              <h1 className={"font-light"}>{description}</h1>
              <h1>{`Available supply: ${(totalSupply-2)?.toString()}`}</h1>
            </div>
            <button
              onClick={()=>router.push("/nfts")}
              className={"bg-indigo-300 p-2 text-indigo-950 my-2 rounded-md"}>
              Go to NFT Store
            </button>
          </div>
        </>
      }
    </div>
  )
}
