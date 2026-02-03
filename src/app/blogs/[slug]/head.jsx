import { blogs } from "../data";

export default async function Head({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return null;

  return (
    <>
      <title>{blog.slug.replace(/-/g, " ")} | Blog</title>
      <meta name="description" content={blog.intro} />
    </>
  );
}
