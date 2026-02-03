"use client"
import { useEffect } from "react";
import BlogsOuter from "@/components/BlogsOuter/BlogsOuter";

const BlogsOuterMain = () => {
    useEffect(() => {
        document.title =
            "Blogs | Unity Interior";
    });
    return (
       <div>
        <BlogsOuter />
       </div>
    )
}
export default BlogsOuterMain;