import { Blogcolors } from '@/data/BlogsData'
import { IBlogs } from '@/types/Types'
import Image from 'next/image'

const SingleBlogAll = ({ blog }: { blog: IBlogs }) => {
  return (
    <div className='bg-[#F9FAFB] flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-16' >
        <div className="w-full md:w-[45%] h-80 md:h-130 relative">
            <Image src={blog?.image} fill className="rounded-lg" alt={blog?.title} />
        </div>
        <div className="flex flex-col gap-3 w-full md:max-w-[45%]">
            <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-5">
                    <span style={{color:Blogcolors[blog.category]}}  className='text-xs md:text-sm font-semibold' >{blog.category}</span>
                    <span className='text-[#9CA3AF] text-xs md:text-sm' >{new Date(blog?.date).toLocaleDateString()}</span>
                </div>
                <span className='subtitle' >{blog.title}</span>
            </div>
            <span className='sixteen leading-loose' >{blog.content}</span>
        </div>
    </div>
  )
}

export default SingleBlogAll