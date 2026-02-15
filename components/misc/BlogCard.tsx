import { Blogcolors } from "@/data/BlogsData"
import {  IBlogs } from "@/types/Types"
import Image from "next/image"
import Link from "next/link"

type BlogCardProps = {
    blog:IBlogs
}

const BlogCard = ({blog}:BlogCardProps) => {
    
  return (
    <Link href={`/blogs/${blog.id}`} className="flex flex-col shadow bg-white rounded-xl w-full md:w-60 h-100 cursor-pointer" >
        <div className="h-1/2 md:h-1/3 w-full relative">
            <Image src={blog?.image} fill className="rounded-t-xl" alt={blog?.title} />
        </div>
        <div className="flex flex-col p-4 gap-4">
            <div className="flex items-center justify-between">
                <span style={{color:Blogcolors[blog.category] }} className="font-medium text-xs md:text-sm" >{blog.category}</span>
                <span className="text-xs md:text-sm text-[#9CA3AF]" >{new Date(blog.date).toLocaleDateString()}</span>
            </div>
            <span className="text-sm md:text-lg font-bold text-[#111827] line-clamp-2" >{blog.title}</span>
            <span className="text-xs md:text-sm text-[#4B5563] line-clamp-6" >{blog?.excerpt}</span>
        </div>
    </Link>
  )
}

export default BlogCard