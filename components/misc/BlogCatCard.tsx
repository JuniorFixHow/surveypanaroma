import { blogs } from "@/data/BlogsData"
import { IBlogCat } from "@/types/Types"
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"

type BlogCatCardProps = {
    cat: IBlogCat;
} & ComponentProps<"div">

const BlogCatCard = ({ cat, ...props }: BlogCatCardProps) => {
    const cats = blogs.filter(blog => blog.category === cat.name)?.length
  return (
    <div className={twMerge("w-full md:w-44 h-26 rounded-lg flex-center flex-col gap-1 cursor-pointer", cat.bg)} {...props}>
        {cat.icon}
        <span className="text-white text-sm md:text-lg font-bold" >{cat.name}</span>
        <span className="text-white text-xs md:text-sm" >{cats} Articles</span>
    </div>
  )
}

export default BlogCatCard