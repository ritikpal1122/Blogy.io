import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import RichTextEditor from "./TextEditor";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle title input
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle content input
  const handleContentChange = (value: string) => {
    setContent(value);
  };

  // Publish blog post
  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    const AuthToken = localStorage.getItem("token") || "";

    const jsonObject = JSON.parse(AuthToken);
    const jwtValue = jsonObject.jwt;
    try {
      setIsLoading(true); // Set loading state
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: jwtValue,
          }
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Failed to publish the blog:", error);
      alert("An error occurred while publishing. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          {/* Title Input */}
          <input
            onChange={handleTitleChange}
            value={title}
            type="text"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-4"
            placeholder="Title"
          />

          {/* Rich Text Editor for Content */}
          <RichTextEditor value={content} onChange={handleContentChange} />

          {/* Publish Button */}
          <button
            onClick={handlePublish}
            type="button"
            disabled={isLoading}
            className={`mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Publishing..." : "Publish post"}
          </button>
        </div>
      </div>
    </div>
  );
};

