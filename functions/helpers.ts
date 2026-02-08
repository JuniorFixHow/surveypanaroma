import { IBlogs } from "@/types/Types";

export const FilterBlogs = (blogs:IBlogs[], category:string):IBlogs[]=>{
    const data = blogs.filter((blog=>{
        if(category === "All") return true;
        return blog.category === category
    }))
    return data;
}