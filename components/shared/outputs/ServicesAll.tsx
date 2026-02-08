import ServiceCard from "@/components/misc/ServiceCard"
import { ServiceData } from "@/data/ServiceDatat"

const ServicesAll = () => {
  return (
    <div className="flex flex-col gap-5 p-4 md:p-16 bg-[#F8FAFC] pb-32" >
        {
            ServiceData.map((item, index) => (
                <ServiceCard key={index} service={item} />
            ))
        }
    </div>
  )
}

export default ServicesAll