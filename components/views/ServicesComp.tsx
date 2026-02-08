import TitleSection from "../misc/TitleSection"
import ServicesAll from "../shared/outputs/ServicesAll"

const ServicesComp = () => {
  return (
    <div className="flex flex-col" >
      <TitleSection title="Our Services" description="Professional surveying and land solutions you can rely on." />
      <ServicesAll />
    </div>
  )
}

export default ServicesComp