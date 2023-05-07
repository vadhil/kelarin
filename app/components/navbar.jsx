"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(true)
  return (
    <header className="container p-4">
        <nav className="row flex items-center justify-between ">
            <div className="nav-logo">
              <a href="/">
              <Image className="p-4" src={"next.svg"} width={100} height={100} alt="logo-aex"/>
              </a>
            </div>
          <div className={`sm:block nav-items sm:flex gap-4 ${nav && "hidden"}`}>
            <Link href={"/"}>beranda</Link>
            <Link href={"/testimoni"}>testimoni</Link>
            <Link href={"/tentang"}>Tentang Kami</Link>
          </div>
          <div className="nav-button">
              <button onClick={()=>setNav(!nav)} className="btn block md:hidden bg-blue-950 text-white p-2 rounded-md">menu</button>
          </div>
            
        </nav>
    </header>
  )
}
