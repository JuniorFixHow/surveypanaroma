import Link from "next/link"

const BottomNav = () => {
  return (
    <div className="flex flex-col bg-[#111827] gap-5 py-5">
        <div className="px-8 mx-auto max-w-7xl self-center md:flex-row gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
            <div className="flex gap-1 md:gap-4 flex-col items-center md:items-start">
                <span className="text-[#F9FAFB] font-bold text-xl md:text-2xl">Survey Panorama</span>
                <span className="text-[#9CA3AF] text-[16px]" >Professional surveying and land solutions across Ghana.</span>
                <Link target="_blank" href={'https://yn0zp.sharepoint.com/:w:/s/SurveyPanorama/IQCywmASwp_JRo8CUoqXKro6AU7kNk-jBwc5s0DgVRzeOpk?e=JD600H'}  className="text-[#9CA3AF] text-[16px] hover:underline" >Terms & Conditions</Link>
            </div>
            <div className="flex gap-1 md:gap-4 flex-col items-center md:items-start">
                <span  className="text-[#F9FAFB] font-bold text-[16px]">Services</span>
                <Link href={'/services#Cadastral Surveying'}  className="text-[#9CA3AF] text-[16px] hover:underline" >Cadastral Surveying</Link>
                <Link href={'/services#Land Documentation Support'}  className="text-[#9CA3AF] text-[16px] hover:underline" >Land Documentation</Link>
                <Link href={'/services#Site Planning & Setting Out'}  className="text-[#9CA3AF] text-[16px] hover:underline" >Site Planning</Link>
            </div>
            <div className="flex gap-1 md:gap-4 flex-col items-center md:items-start">
                <span className="text-[#F9FAFB] font-bold text-[16px]">Training</span>
                <Link href={'/courses'}  className="text-[#9CA3AF] text-[16px] hover:underline" >CAD Courses</Link>
                <Link target="_blank" href={'https://forms.office.com/r/H7t8R30hTW'}  className="text-[#9CA3AF] text-[16px] hover:underline" >Survey Training</Link>
                <Link href={'/courses'}  className="text-[#9CA3AF] text-[16px] hover:underline" >GIS Workshops</Link>
            </div>
            <div className="flex gap-1 md:gap-4 flex-col items-center md:items-start">
                <span className="text-[#F9FAFB] font-bold text-[16px]">Services</span>
                <span className="text-[#9CA3AF] text-[16px]" >• Accra, Ghana</span>
                <Link target="_blank" href={'tel:+233545157534'} className="text-[#9CA3AF] text-[16px] hover:underline" >• +233 545 157 534</Link>
                <Link target="_blank" href={'mailto:info@surveypanorama.com'} className="text-[#9CA3AF] text-[16px] hover:underline" >• info@surveypanorama.com</Link>
            </div>
        </div>
        <hr className="w-9/10  border-[#9CA3AF] self-center" />
        <span className="text-[#9CA3AF] text-[16px] self-center" >© {new Date().getFullYear()} Survey Panorama. All rights reserved.</span>
    </div>
  )
}

export default BottomNav