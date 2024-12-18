import { Blog } from "../hooks"
import { Appbar } from "./Appbar"


export const FullBlog = ({blog} : {blog : Blog}) =>{
    return<div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 w-full px-10 pt-200 max-w-screen-xl pt-12">
                <div className="grid col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog && blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd December 2023
                    </div>
                    <div className="pt-2">
                        { blog && blog.content}
                    </div>
                </div>
                <div className="grid col-span-4">
                    Author
                    <div className="text-2xl font-bold">
                        {blog &&  blog.author.name || "Anonymous"}
                    </div>
                    <div>
                        Random catch phrase about the author
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}