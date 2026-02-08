import Link from "next/link"
import OutlineBtn from "../buttons/OutlineBtn"
import CurvedTop from "./CurvedTop"
import Image from "next/image"

const HomeTop = () => {
  return (
    <CurvedTop>
        <div className="flex gap-6 md:gap-4 flex-col md:flex-row items-center">
            <div className="flex md:flex-1 flex-col gap-4 pt-8 md:pt-0">
                <div className="flex flex-col">
                    <span className="text-white text-2xl md:text-5xl font-bold">Precision Surveying.</span>
                    <span className="text-[#BBE1FA] text-2xl md:text-5xl font-bold">Smart Land Solutions.</span>
                </div>
                <span className="text-white text-sm md:text-xl max-w-[88%]" >Accurate land surveying, reliable documentation support, and professional training—helping individuals, developers, and institutions make confident land decisions across Ghana.</span>
                <div className="flex items-center gap-4">
                    <OutlineBtn className="text-xs md:text-sm" text="Request a Survey" />
                    <Link href={'#'}  className="text-white text-sm md:text-xl hover:underline" >Explore Our Services →</Link>
                </div>
            </div>

            <div className="flex md:flex-1 w-full md:pt-4">
                <div className="relative w-full h-80 md:h-144">
                    <Image src={'/images/HomePage1.png'} fill className="rounded w-full" alt="Panorama Logo" />
                </div>
            </div>
        </div>
    </CurvedTop>
  )
}

export default HomeTop