import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { imgWallet } from "../public";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  return (
    <nav className={"w-full flex justify-between items-center text-lg px-4 py-2"}>
      <button
        onClick={()=>router.push("/")}
        className={"flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-md"}>
        <Image
          src={imgWallet}
          width={50}
          height={50}
          alt={""} />
        <h1 className={"font-light"}>
          w3 SmartWallet
        </h1>
      </button>
      <ConnectWallet style={{
        background: "#b1b2fd",
        color: "#221343"
      }}/>
    </nav>
  )
}
