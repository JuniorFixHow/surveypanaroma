import Image from 'next/image'
import React from 'react'
import PrimaryBtn from '../buttons/PrimaryBtn'

const HomeApp = () => {
  return (
      <section className='flex flex-col items-center md:flex-row gap-4 md:justify-between bg-[#F8FAFC] p-4 md:p-16' >
        <div className="flex w-full relative md:w-[45%] h-60 md:h-112">
            <Image className='rounded' alt='Panaroma App' fill src={'/images/HomePage5.png'} />
        </div>
        <div className="flex gap-4 items-center md:items-start flex-col w-full md:w-[45%]">
            <span className='title' >SurveyGH App</span>
            <div className="flex flex-col gap-2 items-center md:items-start">
                <span className='twenty' >A mobile and web-based surveying app built to simplify data capture, mapping, and report generation.</span>
                <PrimaryBtn className='py-2.5' text='Explore the App' />
            </div>
        </div>
    </section>
  )
}

export default HomeApp