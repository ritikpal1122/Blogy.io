import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

// Interface for a single blog
export interface Blog {
    content: string;
    title: string;
    id: string;
    author: {
        name: string;
    };
}

// Hook to fetch a single blog by ID
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<Blog | null>(null); // Nullable blog object
    const [error, setError] = useState<string | null>(null);

    // Retrieve JWT token from local storage
    const tokenString = localStorage.getItem("token");
    const jwtToken = tokenString ? JSON.parse(tokenString).jwt : null;

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: jwtToken ? `${jwtToken}` : undefined,
                },
            })
            .then((response) => {
                setBlog(response.data); // Set the blog data
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blog:", err);
                setError("Failed to load the blog.");
                setLoading(false);
            });
    }, [id]);

    return {
        loading,
        blog,
        error,
    };
};

// Hook to fetch a list of blogs
export const useBlogs = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [blogs, setBlogs] = useState<Blog[]>([]); // Array of Blog objects
    const [error, setError] = useState<string | null>(null);

    // Retrieve JWT token from local storage
    const tokenString = localStorage.getItem("token");
    const jwtToken = tokenString ? JSON.parse(tokenString).jwt : null;

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: jwtToken ? `${jwtToken}` : undefined,
                },
            })
            .then((response) => {
                setBlogs(response.data.blog); // Set the blogs data
               
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blogs.");
                setLoading(false);
            });
    }, []);

    return {
        loading,
        blogs,
        error,
    };
};
