import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhoWeAreHome = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 md:justify-between bg-white p-4 md:p-16' >
      <div className="flex flex-col gap-4 md:w-[45%]">
        <span className='title' >Who We Are</span>
        <span className='small-content text-[#4B5563]' >Survey Panorama is a professional surveying and land solutions firm committed to accuracy, innovation, and clarity. We combine field expertise with modern geospatial technology to deliver results you can trust.</span>
        <Link className='text-[#2563EB] small-content hover:underline' href={'/about'} >Learn More About Us →</Link>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-[45%] h-80 md:h-136 relative">
        <Image src={'/images/HomePage2.png'} fill className="rounded" alt="Field surveying" />
      </div>
    </div>
  )
}

export default WhoWeAreHome