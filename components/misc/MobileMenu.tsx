'use client'

import { NavItems } from "@/data/NavItems"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { IoMdClose } from "react-icons/io"

type MobileMenuProps = {
    setShow: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ setShow }: MobileMenuProps) => {
    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href;
    }
  return (
    <div className="fixed inset-0 z-50 md:hidden bg-linear-to-b from-[#0F4C75] to-[#3282B8]">
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
        <span className="text-white text-lg font-semibold tracking-wide">
          Menu
        </span>

        {/* Close Button (UI only) */}
        <button
          onClick={()=>setShow(false)}
          aria-label="Close menu"
          className="text-white text-2xl p-2 cursor-pointer rounded-full hover:bg-white/10 transition"
        >
          <IoMdClose />
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col px-6 pt-6 gap-1">
        {NavItems.map((item) => {
          const onPage = isActive(item.href);
          return (
            <Link
                key={item.name}
                href={item.href}
                className={`group relative overflow-hidden rounded-xl ${onPage ? 'bg-white/10' : ''}`}
            >
                <div className="flex items-center justify-between px-5 py-4 text-white text-lg font-medium tracking-wide transition-all duration-300 group-hover:bg-white/10">
                <span>{item.name}</span>

                {/* Subtle arrow indicator */}
                <span className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                </span>
                </div>
            </Link>
          )
        })}
      </nav>

      {/* Footer / Accent */}
      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Survey Panorama. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default MobileMenu
