import { NextPage } from "next";
import {
  ConnectWallet,
  useAddress, useContract, useContractMetadata, useNFTBalance, useTotalCount
} from "@thirdweb-dev/react";
import Image from "next/image";
import { batmanThinking, howAccountAbstractionWorks } from "../public";
import { NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import CollectionCard from "../components/collectionCard";

const Home: NextPage = () => {
  const address = useAddress()
  const {contract: collection, isLoading: isCollectionLoading} = useContract(NFT_CONTRACT_ADDRESS)
  const {data: ownerBalance, isLoading: isNFTBalanceLoading, error: NFTBalanceError} = useNFTBalance(
    collection,
    address
  )
  const {data: contractMetadata, isLoading: isContractMetadataLoading} = useContractMetadata(collection)
  const {data: totalCollectionSupplyCount, isLoading : isTotalCollectionSupplyCountLoading, error: totalCollectionSupplyCountError} = useTotalCount(collection)

  return (
    <main className={""}>
      {
        address ? <section>
          <>
            {(isCollectionLoading
              || isNFTBalanceLoading
              || isContractMetadataLoading
              || isTotalCollectionSupplyCountLoading) ? <>Loading...</> :
            <div>
              <CollectionCard name={contractMetadata?.name}
                              description={contractMetadata?.description}
                              symbol={contractMetadata?.symbol}
                              total={totalCollectionSupplyCount}
                              image={contractMetadata?.image ?? ""}/>
            </div>
      }
          </>
        </section> : <section className={"w-full"}>
         <div className={"text-6xl text-center font-bold text-blue-500 mb-10"}>
           Account Abstraction...
         </div>
          <div className={"text-center flex justify-center text-blue-300 mb-10"}>
            <div className={"border border-blue-400 p-2 text-2xl max-w-fit"}>{"Let's understand"}</div>
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex flex-row mb-8 gap-4 text-justify items-center"}>
              <div className={"flex flex-col"}>
                <h1 className={"text-3xl mb-8"}>
                  What is this account abstraction 🤔
                </h1>
                <p className={"mb-4"}>
                  A standard <b>(ERC-4337)</b> native to Ethereum and all EVM-based blockchains.
                  Account abstraction within blockchain systems allows for assets to be held by smart contracts rather than being controlled by <b>externally-owned accounts (EOAs)</b>.
                  It allows users to use smart contracts as their primary accounts. It essentially turns EOAs into smart contract-enabled accounts.
                </p>
                <p className={"mb-4"}>
                  Different dimensions of Account Abstraction includes: <i>Signature Abstraction</i>, <i>Fee Abstractions</i>, and <i>Nonce Abstraction</i>.
                </p>
                <p className={"mb-4"}>
                  <b>Signature Abstraction: </b> No need of <b>Elliptic Curve Digital Signature Algorithm (ECDSA)</b> signatures, as the default authorization mechanism.
                  Rather, users are permitted to define custom rules for authorizing wallets to initiate transactions.
                </p>
                <p className={"mb-4"}><b>Fee Abstraction</b>:  Enables gasless transactions, using <b>relayers</b>.</p>
                <p className={"mb-4"}><b>Nonce Abstraction</b>: Allows to create custom replay protection mechanisms (instead of the Ethereum protocol enforcing strict ordering on transactions).
                We can have a nonce scheme that permits processing multiple transactions in parallel,
                  (Smart accounts have another feature called transaction batching, with which, we can combine multiple operations into a single transaction to reduce the cost and complexity)
                This would solve the problem of clogged/stuck transactions and significantly improve interactions with dapps.</p>
              </div>
              <div>
                <Image
                  src={batmanThinking}
                  width={1500}
                  height={1500}
                  alt={""}/>
              </div>
            </div>
            <div>
              <div>
                <h1 className={"text-3xl mb-8"}>
                  How does ERC-4337 work? 💡
                </h1>
                <p>
                 ERC-4337 introduces a pseudo-transaction object called a <b>UserOperation</b>,
                  which sends a transaction on {"user's"} behalf.
                  Unconfirmed UserOperation transactions are stored in an <b>alt mempool</b>.
                </p>
                <p>
                  Nodes on Ethereum network can choose to act as a <b>Bundler</b>, which picks up multiple such UserOperations and packs into a single transaction known as bundle transaction.
                  Bundle transactions are sent to a global smart contract known as the <b>EntryPoint</b>, where every individual UserOperation is verified and executed by calling different functions.
                </p>
                <p>
                   UserOperations can include any type of logic, it allows users to implement various customizations to how they want to manage their accounts and the funds in them.
                </p>
                <div className={"w-full flex justify-center p-4"}>
                  <Image
                    className={"w-2/3"}
                    src={howAccountAbstractionWorks}
                    height={1000}
                    width={1500}
                    alt={""} />
                </div>
              </div>
            </div>
          </div>
          <div className={"text-center m-2"}>
            <div className={"text-lg"}>
              {"Let's see a smart wallet in action"}
            </div>
            <div className={"m-4"}><ConnectWallet style={{
              background: "#b1b2fd",
              color: "#221343"
            }}/></div>
          </div>
        </section>
      }
    </main>
  );
};

export default Home;
