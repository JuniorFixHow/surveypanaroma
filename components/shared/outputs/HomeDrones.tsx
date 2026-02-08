import Image from "next/image"
import { FaCheck } from "react-icons/fa6"

const HomeDrones = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:justify-between items-center bg-white p-4 md:p-16" >
        <div className="flex w-full md:w-[45%] h-80 md:h-136 relative">
            <Image fill className="rounded" src={'/images/HomePage3.png'} alt="Why Survey Panorama" />
        </div>
        <div className="flex flex-col w-full md:w-[45%] gap-3">
            <span className="title" >Why Survey Panorama?</span>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                    <FaCheck color="#22C55E" />
                    <span className="small-content" >Accurate and compliant surveys</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FaCheck color="#22C55E" />
                    <span className="small-content" >Mordern tools and GIS technology</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FaCheck color="#22C55E" />
                    <span className="small-content" >Professional training solutions</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FaCheck color="#22C55E" />
                    <span className="small-content" >Deep understanding of Ghana&apos;s land systems</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeDrones