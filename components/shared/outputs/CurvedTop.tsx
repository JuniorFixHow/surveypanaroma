import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CurvedTopProps = {
    children: ReactNode
    className?: string
    pathClassName?: string
}
const CurvedTop = ({ children, className, pathClassName }: CurvedTopProps) => {
  return (
    <section className="relative overflow-hidden" >
        <div className={twMerge("flex items-center justify-center px-4 md:px-16  bg-linear-to-r from-[#0F4C75] via-[#3282B8] to-[#BBE1FA]", className)}>
            {children}
        </div>

        <svg
            className="absolute bottom-0 left-0 w-full rotate-180"
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            >
            <path
                d="M0,32 C240,60 480,60 720,48 960,36 1200,24 1440,32 L1440,0 L0,0 Z"
                className={twMerge("fill-white", pathClassName)}
            />
        </svg>



    </section>
  )
}

export default CurvedTop