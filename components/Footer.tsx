import { FaApple, FaGooglePlay } from "react-icons/fa"
import OutlineBtn from "./shared/buttons/OutlineBtn"
import StoreButton from "./shared/buttons/StoreButton"
import BottomNav from "./misc/BottomNav"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col font-sans" >
        <div className="flex-center gap-4 flex-col bg-[#1E293B] py-4">
            <span className="text-white text-lg md:text-2xl font-semibold font-sans" >Ready to get started</span>
            <Link href={'/contact'} >
                <OutlineBtn text="Contact Us" />
            </Link>
            <div className="flex flex-col items-center gap-2">
                <span className="text-white text-sm" >Download the SurveyGH App</span>
                <div className="flex w-full items-center gap-4 flex-col sm:flex-row">
                    <StoreButton className="sm:w-32 flex-center w-full" icon={<FaApple size={16} color="white" />} text="Apple Store" />
                    <StoreButton className="sm:w-32 flex-center w-full" icon={<FaGooglePlay size={12} color="white" />} text="Play Store" />
                </div>
            </div>
        </div>
        <BottomNav />
    </footer>
  )
}

export default Footer