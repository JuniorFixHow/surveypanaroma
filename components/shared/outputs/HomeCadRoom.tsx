import Link from 'next/link'
import OutlineBtn from '../buttons/OutlineBtn'
import Image from 'next/image'

const HomeCadRoom = () => {
  return (
    <section className='flex flex-col items-center md:flex-row gap-4 md:justify-between bg-linear-to-r from-[#3282B8] to-[#0F4C75] p-4 md:p-16' >
        <div className="flex gap-4 items-center md:items-start flex-col w-full md:w-[45%]">
            <span className='text-white text-lg md:text-4xl font-bold' >CAD-Survey Room</span>
            <span className='text-white text-sm md:text-xl' >Professional CAD and surveying training designed for students, young surveyors, and industry professionals.</span>
            <Link href={'/courses'} >
              <OutlineBtn className='w-fit' text='View Courses' />
            </Link>
        </div>
        <div className="flex w-full relative md:w-[45%] h-80 md:h-136">
            <Image className='rounded' alt='CAD-Survey Room' fill src={'/images/HomePage4.png'} />
        </div>
    </section>
  )
}

export default HomeCadRoom