import TitleSection from "../misc/TitleSection"
import CoursesAll from "../shared/outputs/CoursesAll"

const CoursesComp = () => {
  return (
    <div className="flex flex-col" >
        <TitleSection title='Our CAD-Survey Room' description="Professional CAD and surveying training designed for students, young surveyors, and practicing professionals." />
        <CoursesAll/>
    </div>
  )
}

export default CoursesComp