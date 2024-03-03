import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
import { imgWallet } from "../public";

export default function Navbar() {
  return (
    <nav className={"w-full flex justify-between items-center text-lg px-4 py-2"}>
      <div className={"flex items-center gap-2"}>
        <Image
          src={imgWallet}
          width={50}
          height={50}
          alt={""} />
        <h1 className={"font-light"}>
          w3 SmartWallet
        </h1>
      </div>
      <ConnectWallet />
    </nav>
  )
}
