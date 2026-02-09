import { IBlogs } from "@/types/Types"
import SingleBlogComp from "../views/SingleBlogComp"

export const SingleBlog = ({ blog }: { blog: IBlogs }) => {
  return (
    <SingleBlogComp blog={blog} />
  )
}
