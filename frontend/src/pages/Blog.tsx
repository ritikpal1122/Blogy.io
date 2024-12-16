import { useParams } from "react-router-dom";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";

export default function Blog() {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    console.log(blog);

    if (loading) {
        return (
            <div>
                <Appbar />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        );
    }

    if (!blog) {
        return <div>No blog found</div>; // or any other error handling mechanism
    }

    return (
        <div>
            <FullBlog userBLog={blog} />
        </div>
    );
} 