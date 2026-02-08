import { BlogCategory, IBlogs } from "@/types/Types"
import Image from "next/image"

type BlogCardProps = {
    blog:IBlogs
}

const BlogCard = ({blog}:BlogCardProps) => {
    const colors: Record<BlogCategory, string> = {
        'Surveying':'#D97706',
        'Site Planning':'#3B82F6',
        'Land Buying':'#0F4C75',
        'Updates': '#A855F7',
        'Tools & Tech': '#EA580C'
    }
  return (
    <div className="flex flex-col shadow bg-white rounded-xl w-60 h-100 cursor-pointer" >
        <div className="h-1/3 w-full relative">
            <Image src={blog?.image} fill className="rounded-t-xl" alt={blog?.title} />
        </div>
        <div className="flex flex-col p-4 gap-4">
            <div className="flex items-center justify-between">
                <span style={{color:colors[blog.category] }} className="font-medium text-xs md:text-sm" >{blog.category}</span>
                <span className="text-xs md:text-sm text-[#9CA3AF]" >{blog.date}</span>
            </div>
            <span className="text-sm md:text-lg font-bold text-[#111827] line-clamp-2" >{blog.title}</span>
            <span className="text-xs md:text-sm text-[#4B5563] line-clamp-6" >{blog?.excerpt}</span>
        </div>
    </div>
  )
}

export default BlogCard