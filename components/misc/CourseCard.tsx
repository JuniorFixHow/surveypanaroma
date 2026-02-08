import { ICourses } from "@/types/Types"
import Link from "next/link"
import { FaCheck } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"

type CourseCardProps = {
    course: ICourses
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link target="_blank" href={'https://forms.office.com/r/H7t8R30hTW'}  className="flex flex-col h-120 w-74 bg-white shadow-lg rounded-xl cursor-pointer" >
        <div className={twMerge("flex flex-col gap-4 p-4 rounded-t-xl", course.bg)}>
            <div className="flex flex-row items-center gap-2">
                {course.icon}
                <div className="flex flex-col">
                    <span className="small-content text-white font-bold" >{course.module}</span>
                    <span className="text-[#DBEAFE] text-xs md:text-sm" >{course.level}</span>
                </div>
            </div>

            <span className="text-white text-lg md:text-xl font-bold" >{course.title}</span>
            <span className="text-white text-xs md:text-sm" >{course.description}</span>
        </div>

        <div className="flex flex-col justify-between gap-6 p-4 grow">
            <div className="flex flex-col gap-2">
                {
                    course.features.map((feature, index) => (
                        <div key={index} className="flex flex-row items-center gap-2">
                            <FaCheck size={12} color="#22C55E" />
                            <span className="text-xs md:text-sm text-[#374151]" >{feature}</span>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex w-full items-center justify-between">
                    <span className="text-xs md:text-sm text-[#374151]" >Duration: {course.duration}</span>
                    <span className="text-xs md:text-sm text-[#374151]" >{course.level}</span>
                </div>
                <div className="flex-center self-end w-fit px-2 py-1 bg-[#D1FAE5] rounded-full">
                    <span className="text-xs md:text-sm text-[#374151]" >{course.price}</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CourseCard