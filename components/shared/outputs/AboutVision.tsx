import {MissionCard, VisionCard} from '@/components/misc/VisionCard'

const AboutVision = () => {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-8  p-4 md:p-16 bg-white">
        <div className="flex flex-col gap-2 items-center">
            <span className="title" >Vision & Mission</span>
            <span className="twenty" >Guiding principles that drive our commitment to excellence</span>
        </div>
        <div className="flex flex-col items-center md:justify-center gap-5 md:gap-10 md:flex-row w-full">
            <VisionCard/>
            <MissionCard/>
        </div>
    </section>
  )
}

export default AboutVision