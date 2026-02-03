import BlogsInner from "@/components/BlogsInner/BlogsInner";
import BlogsInnerHero from "@/components/BlogsInner/BlogsInnerHero";
import { blogs } from "../data";
import { blogsMeta } from "../[slug]/head";

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;

  const blogContent = blogs.find(
    (item) => item.slug === slug
  );

  const blogMeta = blogsMeta.find(
    (item) => item.slug === slug
  );

  return (
    <>
      {blogMeta && (
        <BlogsInnerHero
          title={blogMeta.title}
          category={blogMeta.category}
          image={blogMeta.heroImage}
        />
      )}

      <BlogsInner
        blog={
          blogContent || {
            intro: "Content coming soon.",
            sections: [],
          }
        }
      />
    </>
  );
}
