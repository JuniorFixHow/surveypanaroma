'use client'
import Image from "next/image"
import Nav from "./misc/Nav"
import { IoMdMenu } from "react-icons/io"
import { Activity, useState } from "react"
import MobileMenu from "./misc/MobileMenu"
import Link from "next/link"

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="flex flex-row items-center justify-between gap-4 bg-white px-4 md:px-6 py-2" >
        <Link href={'/'}  className="flex flex-row gap-2 items-center cursor-pointer">
            <Image src="/images/logo.png" alt="logo" height={52} width={52}  className="" />
            <span className="text-[#0F4C75] hidden sm:block text-lg md:text-2xl font-bold" >Survey Panorama</span>
        </Link>
        <Nav/>
        <IoMdMenu onClick={()=>setShow(true)} size={30} className="cursor-pointer md:hidden" />
        <Activity mode={show ? 'visible' : 'hidden'} >
          <MobileMenu setShow={setShow} />
        </Activity>
    </header>
  )
}

export default Header