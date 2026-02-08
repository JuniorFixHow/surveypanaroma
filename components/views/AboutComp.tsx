import AboutBuilding from "../shared/outputs/AboutBuilding"
import AboutTop from "../shared/outputs/AboutTop"
import AboutVision from "../shared/outputs/AboutVision"

const AboutComp = () => {
  return (
    <div className="flex flex-col">
        <AboutTop/>
        <AboutBuilding/>
        <AboutVision/>
        <div className="w-full bg-[#F8FAFC] h-12" />
    </div>
  )
}

export default AboutComp