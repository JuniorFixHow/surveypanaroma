import Image from "next/image"
import CurvedTop from "./CurvedTop"
import { FaMap } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"

const AboutTop = () => {
  return (
     <CurvedTop className="p-4 md:p-16" pathClassName="fill-[#F8FAFC]" >
        <div className="flex w-full gap-6 md:gap-4 flex-col md:flex-row items-center">
            <div className="flex w-full md:w-[45%] flex-col gap-4">
                <div className="flex flex-col">
                    <span className="text-white text-2xl md:text-5xl font-bold">About Survey</span>
                    <span className="text-[#BBE1FA] text-2xl md:text-5xl font-bold">Panorama</span>
                </div>
                <span className="text-white text-sm md:text-xl max-w-[88%]" >Precision in land. Vision for the future.</span>
                <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <FaMap color="white" />
                        <span className="text-xs md:text-[16px] text-white" >Land Surveying</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <GiGraduateCap color="white" />
                        <span className="text-xs md:text-[16px] text-white" >Professional Training</span>
                    </div>
                </div>
            </div>

            <div className="flex w-full md:w-[45%] items-center">
                <div className="relative w-full h-60 md:h-96">
                    <Image src={'/images/About1.png'} fill className="rounded" alt="Panorama Logo" />
                </div>
            </div>
        </div>
    </CurvedTop>
  )
}

export default AboutTop