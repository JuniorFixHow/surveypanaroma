import RoundCheck from "@/components/misc/RoundCheck"
import Image from "next/image"
import { FaBook } from "react-icons/fa"

const AboutBuilding = () => {
  return (
    <section className="flex flex-col p-4 md:p-16 bg-[#F8FAFC] items-center gap-6" >
        <div className="flex w-full flex-col gap-2 items-center md:items-start">
            <div className="flex flex-row items-center gap-1 rounded-3xl bg-[#D1FAE5] px-4 py-2">
                <FaBook color="#0F4C75" />
                <span className="sixteen" >Our Story</span>
            </div>
            <span className="title text-center md:text-start" >Building the Future of Land Management</span>
        </div>

        <div className="flex flex-col w-full gap-6 md:justify-between md:flex-row items-center md:items-start">
            <div className="flex w-full md:w-[45%] flex-col gap-5 md:gap-10 items-center md:items-start">
                <span className="small-content text-[#374151] text-center md:text-start" >Survey Panorama was founded by Emmanuel Bosomtwe with a clear mission to provide accurate surveying services, reliable land documentation support, and professional training using modern tools and best practices.</span>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                        <RoundCheck/>
                        <div className="flex flex-col gap-0.5">
                            <span className="sixteen font-semibold" >Modern Technology</span>
                            <span className="sixteen" >Utilizing cutting-edge surveying equipment and software</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <RoundCheck/>
                        <div className="flex flex-col gap-0.5">
                            <span className="sixteen font-semibold" >Expert Training</span>
                            <span className="sixteen" >Comprehensive training programs for industry professionals</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <RoundCheck/>
                        <div className="flex flex-col gap-0.5">
                            <span className="sixteen font-semibold" >Reliable Documentation</span>
                            <span className="sixteen" >Trusted land documentation and legal support services</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-1.5 w-full md:w-[45%] justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="flex relative w-36 md:w-70 h-32 md:h-66">
                        <Image src={'/images/About2.png'} fill className="rounded" alt="Field Surveying" />
                    </div>
                    <div className="flex relative w-36 md:w-70 h-16 md:h-34">
                        <Image src={'/images/About4.png'} fill className="rounded" alt="Field Surveying" />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-10">
                    <div className="flex relative w-36 md:w-70 h-16 md:h-34">
                        <Image src={'/images/About3.png'} fill className="rounded" alt="Field Surveying" />
                    </div>
                    <div className="flex relative w-36 md:w-70 h-32 md:h-66">
                        <Image src={'/images/About5.png'} fill className="rounded" alt="Field Surveying" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutBuilding