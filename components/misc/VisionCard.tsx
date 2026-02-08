import { FaEye } from "react-icons/fa"
import ContentIcon from "./ContentIcon"
import { FaStar } from "react-icons/fa6"
import { TbTargetArrow } from "react-icons/tb"
import { HiLightBulb } from "react-icons/hi"

export const VisionCard = () => {
  return (
    <div className="bg-linear-to-r from-[#ECFDF5] to-[#F0FDFA] p-3 md:p-5 rounded md:rounded-2xl flex flex-col gap-4 w-full md:max-w-[45%]" >
        <div className="flex items-center flex-row gap-2">
            <ContentIcon className="bg-[#0F4C75]" icon={<FaEye color="white" />} />
            <span className="text-[#0F4C75] text-lg md:text-2xl font-bold" >Vision</span>
        </div>
        <span className="small-content text-[#374151]" >To shape the future of land management through precision and technology.</span>
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
                <FaStar color="#0F4C75" />
                <span className="sixteen" >Innovation in surveying technology</span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <FaStar color="#0F4C75" />
                <span className="sixteen" >Sustainable land development</span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <FaStar color="#0F4C75" />
                <span className="sixteen" >Future-ready professionals</span>
            </div>
        </div>
    </div>
  )
}


export const MissionCard = () => {
  return (
    <div className="bg-linear-to-r from-[#ECFDF5] to-[#F0FDFA] p-3 md:p-5 rounded md:rounded-2xl flex flex-col gap-4 w-full md:max-w-[45%]" >
        <div className="flex items-center flex-row gap-2">
            <ContentIcon className="bg-[#1E293B]" icon={<TbTargetArrow color="white" />} />
            <span className="text-[#0F4C75] text-lg md:text-2xl font-bold" >Mission</span>
        </div>
        <span className="small-content text-[#374151]" >To deliver accurate surveys, trusted land solutions, and industry-ready training.</span>
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
                <HiLightBulb color="#0F4C75" />
                <span className="sixteen" >Precision surveying services</span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <HiLightBulb color="#0F4C75" />
                <span className="sixteen" >Comprehensive training programs</span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <HiLightBulb color="#0F4C75" />
                <span className="sixteen" >Reliable documentation support</span>
            </div>
        </div>
    </div>
  )
}

