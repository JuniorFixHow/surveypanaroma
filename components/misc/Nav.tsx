'use client'
import { NavItems } from "@/data/NavItems"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {
    const path = usePathname();

    const isActive = (href: string) => {
        return path === href;
    }

  return (
    <div className=" hidden md:flex items-center gap-6">
        {
            NavItems.map((item, index) => {
                const onPage = isActive(item.href);
                return (
                    <Link className={`text-[#1E293B] text-[16px] transition duration-300 hover:font-bold ${onPage ? "font-bold" : "font-semibold"}`} key={index} href={item.href}>{item.name}</Link>
                )
            })
        }
    </div>
  )
}

export default Nav