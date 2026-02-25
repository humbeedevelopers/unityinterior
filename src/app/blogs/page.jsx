// "use client"
// import { useEffect } from "react";
// import BlogsOuter from "@/components/BlogsOuter/BlogsOuter";
// import BlogsHero from "@/components/BlogsHero/BlogsHero";

// const BlogsOuterMain = () => {
//     useEffect(() => {
//         document.title =
//             "Blogs | Unity Interior";
//     });
//     return (
//        <div>
//         <BlogsHero />
//         <BlogsOuter />
//        </div>
//     )
// }
// export default BlogsOuterMain;

import BlogsHero from "@/components/BlogsHero/BlogsHero";
import BlogsOuter from "@/components/BlogsOuter/BlogsOuter";

async function getBlogs() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/blogs?_embed&acf_format=standard",
    { next: { revalidate: 60 } }
  );
  return res.json();
}   

async function getCategories() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/blog_category",
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return (
    <>
      <BlogsHero />
      <BlogsOuter blogs={blogs} categories={categories} />
    </>
  );
}