import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface Blog{
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const useBlog = ({id} : {id : string}) =>{
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()
    const tokenString = localStorage.getItem("token");
    let jwtToken = null;

    // Check if the token exists and parse it
    if (tokenString) {
        const tokenObject = JSON.parse(tokenString);
        jwtToken = tokenObject.jwt; // Extract the JWT token
    }
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers : {
                Authorization: jwtToken ? `${jwtToken}` : undefined 
            }
        })
        .then(response => {
            setBlog(response.data.blogs)
            setLoading(false)
        })
    },[id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([]);

    const tokenString = localStorage.getItem("token");
    let jwtToken = null;

    // Check if the token exists and parse it
    if (tokenString) {
        const tokenObject = JSON.parse(tokenString);
        jwtToken = tokenObject.jwt; // Extract the JWT token
    }
    console.log("Token in useBlogs:", jwtToken);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers : {
                Authorization: jwtToken ? `${jwtToken}` : undefined 
            }
        })
        .then(response => {
            setBlogs(response.data)
            setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}