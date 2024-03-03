import Image from "next/image";

type CollectionCardProps = {
  name: string | undefined,
  description: string | undefined,
  symbol: string | undefined,
  image: string | undefined
}
export default function CollectionCard({name, description, symbol, image}: CollectionCardProps) {
  return (
    <>
      <div className={"flex flex-row"}>
        <div>
          <Image src={image}
                 alt={""}
                 width={250}
                 height={250}/>
        </div>
        <div>
          <h1>{`Collection: ${name} (${symbol})`}</h1>
          <h1>{description}</h1>
        </div>
      </div>
    </>
  )
}
