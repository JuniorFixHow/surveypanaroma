import { FaLocationDot } from "react-icons/fa6"
import ContentIcon from "./ContentIcon"
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const GetInTouch = () => {
  return (
    <div className="w-full p-4 shadow bg-white rounded-lg flex flex-col gap-5" >
        <span className="subtitle" >Get in Touch</span>
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <ContentIcon className="bg-[#2563EB1A]/90 h-8 w-8 rounded-lg" icon={<FaLocationDot color="#2563EB" />} />
                <div className="flex flex-col">
                    <span className="text-[#111827] text-sm font-bold" >Office Address</span>
                    <span className="text-[#64748B] text-sm" >Shama Junction</span>
                </div>
            </div>
            <div className="flex gap-2">
                <ContentIcon className="bg-[#10B9811A]/90 h-8 w-8 rounded-lg" icon={<FaPhoneAlt color="#10B981" />} />
                <div className="flex flex-col">
                    <span className="text-[#111827] text-sm font-bold" >Phone</span>
                    <Link target="_blank" href={'tel:+233545157534'} className="text-[#64748B] text-sm" >+233 545 157 534</Link>
                </div>
            </div>
            <div className="flex gap-2">
                <ContentIcon className="bg-[#F59E0B1A]/90 h-8 w-8 rounded-lg" icon={<MdEmail color="#F59E0B" />} />
                <div className="flex flex-col">
                    <span className="text-[#111827] text-sm font-bold" >Email</span>
                    <Link target="_blank" href={'mailto:info@panoroma.com'} className="text-[#64748B] text-sm" >info@panoroma.com</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch