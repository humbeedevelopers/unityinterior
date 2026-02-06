"use client"
import { useEffect } from "react";
import BlogsOuter from "@/components/BlogsOuter/BlogsOuter";
import BlogsHero from "@/components/BlogsHero/BlogsHero";

const BlogsOuterMain = () => {
    useEffect(() => {
        document.title =
            "Blogs | Unity Interior";
    });
    return (
       <div>
        <BlogsHero />
        <BlogsOuter />
       </div>
    )
}
export default BlogsOuterMain;