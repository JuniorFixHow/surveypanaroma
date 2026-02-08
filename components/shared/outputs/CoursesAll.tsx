import { FaPlay } from "react-icons/fa"
import OutlineBtn from "../buttons/OutlineBtn"
import PrimaryBtn from "../buttons/PrimaryBtn"
import { GoDownload } from "react-icons/go"
import { CoursesData } from "@/data/CoursesData"
import CourseCard from "@/components/misc/CourseCard"
import Link from "next/link"

const CoursesAll = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 bg-[#F9FAFB] p-4 md:p-16 items-center" >
        <div className="flex flex-row items-center w-full justify-center gap-2">
            <Link href={'https://forms.office.com/r/H7t8R30hTW'} target="_blank" >
              <PrimaryBtn icon={<FaPlay color="white" />} text="Enroll Now" />
            </Link>        
            <Link href={'/Outline.pdf'} download={'Outline.pdf'} >
              <OutlineBtn icon={<GoDownload color="#0F4C75" />} className="border border-[#D1D5DB]" text="Download Course Outline" />
            </Link>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            CoursesData.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          }
        </div>
    </div>
  )
}

export default CoursesAll