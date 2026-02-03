import BlogsInner from "@/components/BlogsInner/BlogsInner";
import { blogs } from "../data";

export default async function BlogSlugPage({ params }) {
  const { slug } = await params; // ✅ THIS FIXES THE ERROR

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  return (
    <BlogsInner
      blog={
        blog || {
          intro: "Content coming soon.",
          sections: [],
        }
      }
    />
  );
}
