import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container p-4">
        <nav className="row flex items-center justify-between ">
            <div className="nav-logo">
              <a href="/">
              <Image className="p-4" src={"next.svg"} width={100} height={100} alt="logo-aex"/>
              </a>
            </div>
          <div className="nav-items flex gap-4">
            <Link href={"/"}>beranda</Link>
            <Link href={"/testimoni"}>testimoni</Link>
            <Link href={"/tentang"}>Tentang Kami</Link>
          </div>
            
        </nav>
    </header>
  )
}
