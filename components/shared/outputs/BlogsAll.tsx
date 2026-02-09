'use client'
import BlogCard from "@/components/misc/BlogCard"
import BlogCategories from "@/components/misc/BlogCategories"
import { blogs } from "@/data/BlogsData"
import { FilterBlogs } from "@/functions/helpers"
import { useState } from "react"

const BlogsAll = () => {
    const [category, setCategory] = useState("All");
    const bgs = FilterBlogs(blogs, category);
  return (
    <div className="flex flex-col items-center gap-12 bg-[#F9FAFB] p-4 md:p-16" >
        <BlogCategories setCategory={setCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                bgs.sort((a, b)=> new Date(b.date).getTime() - new Date(a.date).getTime()).map((blog, index) => (
                    <BlogCard blog={blog} key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default BlogsAll