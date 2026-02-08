type TitleSectionProps = {
    title: string;
    description: string;
}

const TitleSection = ({title, description}: TitleSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-5 p-8 md:p-16 bg-linear-to-r from-[#BBE1FA] to-[#0F4C75]" >
        <span className="text-xl md:text-4xl font-bold text-white" >{title}</span>
        <span className=" text-sm md:text-xl text-white text-center" >{description}</span>
    </div>
  )
}

export default TitleSection