import TitleSection from "../misc/TitleSection"
import ContactAll from "../shared/outputs/ContactAll"

const ContactComp = () => {
  return (
    <div className="flex flex-col" >
        <TitleSection title="Contact Us" description="Have a project, question, or training need? We're ready to help you transform your land development vision into reality." />
        <ContactAll/>
    </div>
  )
}

export default ContactComp