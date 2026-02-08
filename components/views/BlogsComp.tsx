import TitleSection from "../misc/TitleSection"
import BlogsAll from "../shared/outputs/BlogsAll"

const BlogsComp = () => {
  return (
    <div className="flex flex-col" >
        <TitleSection title="Our Blogs" description="We write blogs about the latest trends in the surveying field." />
        <BlogsAll />
    </div>
  )
}

export default BlogsComp