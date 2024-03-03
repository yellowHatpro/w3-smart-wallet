import Image from "next/image";
import { BigNumber } from "ethers";

type CollectionCardProps = {
  name: string | undefined,
  description: string | undefined,
  symbol: string | undefined,
  total: BigNumber | undefined,
  image: string | undefined
}
export default function CollectionCard({name, description, symbol, total, image}: CollectionCardProps) {
  return (
    <>
      <div className={"flex flex-row"}>
        <div>
          <Image src={image ?? ""}
                 alt={""}
                 width={250}
                 height={250}/>
        </div>
        <div>
          <h1>{`Collection: ${name} (${symbol})`}</h1>
          <h1>{description}</h1>
          <h1>{total?.toString()}</h1>
        </div>
      </div>
    </>
  )
}
