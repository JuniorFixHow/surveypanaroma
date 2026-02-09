import { IBlogs } from "@/types/Types"
import TitleSection from "../misc/TitleSection"
import SingleBlogAll from "../shared/outputs/SingleBlogAll"

const SingleBlogComp = ({ blog }: { blog: IBlogs }) => {
  return (
    <div className="flex flex-col" >
        <TitleSection title={blog.category} description={blog.title} />
        <SingleBlogAll blog={blog} />
    </div>
  )
}

export default SingleBlogComp