import { NextPage } from "next";
import {
  useAddress,
} from "@thirdweb-dev/react";
import Image from "next/image";
import { batmanThinking } from "../public";

const Home: NextPage = () => {
  const address = useAddress()
  return (
    <main className={""}>
      {
        address ? <section>

        </section> : <section className={"w-full"}>
         <div className={"text-6xl text-center font-bold text-blue-500 mb-10"}>
           Account Abstraction...
         </div>
          <div className={"flex flex-col"}>
            <div className={"flex flex-row"}>
              <div className={"flex flex-col"}>
                <h1 className={"text-3xl"}>
                  What is this account abstraction 🤔
                </h1>
                <p className={""}>
                  A standard <b>(ERC-4337)</b> native to Ethereum and all EVM-based blockchains.
                  Account abstraction within blockchain systems allows for assets to be held by smart contracts rather than being controlled by <b>externally-owned accounts (EOAs)</b>.
                  It allows users to use smart contracts as their primary accounts. It essentially turns EOAs into smart contract-enabled accounts.
                </p>
              </div>
              <div>
                <Image
                  src={batmanThinking}
                  width={1000}
                  height={800}
                  alt={""}/>
              </div>
            </div>
            <div>
              <div>
                <h1></h1>
              </div>
            </div>
          </div>
        </section>
      }
    </main>
  );
};

export default Home;
