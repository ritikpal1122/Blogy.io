import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import Loader from "../components/Loader";

export default function Blog() {
  const { id } = useParams();

  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div>{blog ? <FullBlog blog={blog} /> : <div>No blog found</div>}</div>
  );
}
