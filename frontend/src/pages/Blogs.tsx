
import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";


export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex flex-col items-center"> {/* Wrap the skeleton components in a flex container */}
                    <BlogSkeleton/>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.blog.map((blog: { id: string; author: { name: any }; title: string; content: string; }) => (
                        <BlogCard 
                            key={blog.id} 
                            authorName={blog.author.name || ""}
                            title={blog.title}
                            content={blog.content}
                            publishedDate="2-mar-2002"
                            id={blog.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
