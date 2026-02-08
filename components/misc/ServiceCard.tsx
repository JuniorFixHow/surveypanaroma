import { IServices } from "@/types/Types";
import PrimaryBtn from "../shared/buttons/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
    service: IServices;
}

const ServiceCard = ({service}: ServiceCardProps) => {

    const subject = `Service Request: ${service.name}`;
    const body = `
        Hello,
        I am interested in requesting your service in ${service.name}.
    `

  return (
    <section id={service.name} className="flex flex-col-reverse gap-4 md:flex-row md:h-72 shadow-xl rounded md:rounded-2xl bg-white" >
        <div className="flex p-4 justify-between md:p-6 flex-col gap-6 w-full md:max-w-3/4" >
            <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-2">
                    {service.icon}
                    <span className="text-[#0F172A] font-bold text-xl md:text-3xl" >{service.name}</span>
                </div>
                <span className="small-content text-[#4B5563]"  >{service.description}</span>
            </div>

            <div className="flex flex-col gap-3">
                <span className="text-[#6B7280] text-xs md:text-sm" >What It&apos;s For</span>
                <div className="flex flex-row items-center gap-4">
                    {
                        service.purpose.map((item, index) => (
                            <span className="text-[#0F4C75] text-xs md:text-sm font-medium" key={index} >{item}</span>
                        ))
                    }
                </div>
            </div>
            <Link href={`mailto:info@surveypanorama.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className="w-fit" >
                <PrimaryBtn text='Request This Service' className='w-fit' />
            </Link>
        </div>
        <div className="h-52 md:h-full w-full md:w-1/4 relative">
            <Image src={service.image} fill className="rounded md:rounded-tr-2xl" alt={service.name} />
        </div>
    </section>
  )
}

export default ServiceCard