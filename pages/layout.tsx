import Navbar from "../components/navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
       <Navbar/>
      <main className={"p-2"}>
        {children}
      </main>
    </>
  )
}
