import { HomeContent } from "@/data/HomeContent"
import PrimaryBtn from "../buttons/PrimaryBtn"
import Link from "next/link"

const OurServicesHome = () => {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-8  p-4 md:p-16 bg-[#F8FAFC]">
        <div className="flex flex-col gap-2 items-center">
            <span className="title" >Our Services</span>
            <span className="twenty" >Reliable surveying and land soultions tailored to your needs</span>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                HomeContent.map((item, index) => (
                    <div key={index} className="flex bg-white h-48 rounded shadow flex-col gap-2 p-4">
                        {item.icon}
                        <span className="semi-twenty" >{item.name}</span>
                        <span className="sixteen" >{item.description}</span>
                    </div>
                ))
            }
        </div>
        <div className="flex-center">
            <Link href={'/services'} >
                <PrimaryBtn className="py-2.5" text="View All Services" />
            </Link>
        </div>
    </section>
  )
}

export default OurServicesHome