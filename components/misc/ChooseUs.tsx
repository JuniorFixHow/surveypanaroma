import { FaCheck } from "react-icons/fa6"

const ChooseUs = () => {
  return (
    <div className="flex flex-col gap-4 p-5 w-full rounded-lg bg-linear-to-r from-[#0F4C75] to-[#134E4A99]" >
        <span className="text-lg md:text-xl font-semibold text-white" >Why Choose Us?</span>
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <div className="flex-center rounded-full h-6 w-6 bg-[#86EFAC]">
                    <FaCheck />
                </div>
                <span className="text-xs md:text-sm text-white" >Expert land surveying services</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-center rounded-full h-6 w-6 bg-[#86EFAC]">
                    <FaCheck />
                </div>
                <span className="text-xs md:text-sm text-white" >Advanced technology solutions</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-center rounded-full h-6 w-6 bg-[#86EFAC]">
                    <FaCheck />
                </div>
                <span className="text-xs md:text-sm text-white" >Professional training programs</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-center rounded-full h-6 w-6 bg-[#86EFAC]">
                    <FaCheck />
                </div>
                <span className="text-xs md:text-sm text-white" >Comprehensive project support</span>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs