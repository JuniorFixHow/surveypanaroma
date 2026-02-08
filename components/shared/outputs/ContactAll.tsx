import ChooseUs from "@/components/misc/ChooseUs"
import ContactForm from "@/components/misc/ContactForm"
import GetInTouch from "@/components/misc/GetInTouch"

const ContactAll = () => {
  return (
    <section className="flex flex-col justify-between gap-8 md:flex-row bg-[#F9FAFB] p-4 md:p-16" >
        <div className="flex flex-col items-center md:items-start w-full md:w-[45%] gap-6">
            <GetInTouch />
            <ChooseUs />
        </div>
        <ContactForm />
    </section>
  )
}

export default ContactAll