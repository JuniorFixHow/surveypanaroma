import { SingleBlog } from "@/components/screens/SingleBlog";
import { blogs } from "@/data/BlogsData";
import { notFound } from "next/navigation";

export default async function SingleBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return notFound();
    }
    return (
        <SingleBlog blog={blog} />
    )
}