import { BlogCats } from "@/data/BlogsData"
import BlogCatCard from "./BlogCatCard"
import { Dispatch, SetStateAction } from "react"

type BlogCategoriesProps = {
    setCategory: Dispatch<SetStateAction<string>>
}

const BlogCategories = ({ setCategory }: BlogCategoriesProps) => {

  return (
    <div className="flex flex-col gap-5 items-center" >
        <div className="flex flex-col items-center gap-1.5">
            <span className="title" >Explore by Category</span>
            <span className="text-[#4B5563] small-content" >Find articles that match your interests</span>
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5" >
            {
                BlogCats.map((cat, index) => (
                    <BlogCatCard onClick={()=>setCategory(cat.name)} key={index} cat={cat} />
                ))
            }
        </div>
    </div>
  )
}

export default BlogCategories