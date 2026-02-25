import BlogsInner from "@/components/BlogsInner/BlogsInner";
import BlogsInnerHero from "@/components/BlogsInner/BlogsInnerHero";
// import { blogs } from "../data";
// import { blogsMeta } from "../[slug]/head";
import RelatedBlogsSlider from "@/components/RelatedBlogsSlider/RelatedBlogsSlider";
// import ProjectHero from "@/components/ProjectHero/ProjectHero";


async function getBlogBySlug(slug) {
  const res = await fetch(
    `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/blogs?slug=${slug}&_embed&acf_format=standard`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch blog");

  const data = await res.json();
  console.log("FETCHED BLOG:", data);
  return data[0] || null;
}


// async function getAllBlogs() {
//   const res = await fetch(
//     "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/blogs?_embed&acf_format=standard",
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) throw new Error("Failed to fetch blogs");

//   return res.json();
// }
async function getAllBlogsFormatted() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/blogs?_embed&acf_format=standard",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");

  const blogs = await res.json();

  return blogs.map((post) => {
    const terms = post._embedded?.["wp:term"] || [];

    const blogCategory =
      terms.flat().find(
        (term) => term.taxonomy === "blog_category"
      ) || null;

    return {
      id: post.id,
      slug: post.slug,
      title: post.acf?.blog_title || post.title?.rendered,
      categoryName: blogCategory?.name || "Uncategorized",

      // ONLY ACF date
      date: post.acf?.blog_time || "",

      image:
        post.acf?.blog_banner?.url ||
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        null,
    };
  });
}
// Optional but recommended for static generation
// export async function generateStaticParams() {
//   const res = await fetch(
//     "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/blogs?_embed&acf_format=standard",
//     { next: { revalidate: 60 } }
//   );

//   const blogs = await res.json();

//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;   //  unwrap promise
  const slug = resolvedParams.slug;      //  now  safe

  // const slug = params.slug;
  // // const slug = await params;
  // console.log("PARAM SLUG:", slug);
  // const params = await props.params;  
  //   const slug = params.slug;

  console.log("PARAM SLUG:", slug);

  const blog = await getBlogBySlug(slug);
  const allBlogs = await getAllBlogsFormatted();

  if (!blog) return <div>Blog not found</div>;
  // const blog = await getBlogBySlug(params.slug);

  if (!blog) return <div>Blog not found</div>;

  //  Get Category from embedded terms
  const terms = blog._embedded?.["wp:term"] || [];

  const blogCategory =
    terms.flat().find(
      (term) => term.taxonomy === "blog_category"
    ) || null;

  const heroImage = blog.acf?.blog_banner?.url || null;

  //Build blogData for BlogsInner
  const sections = [];

  for (let i = 1; i <= 6; i++) {
    const section = blog.acf?.[`blog_section_${i}`];

    if (section?.section_title) {
      sections.push({
        title: section.section_title,
        paragraphs: [
          {
            bold: section.bold_text || "",
            text: section.paragraph_text || "",
          },
        ],
        image: section.section_image?.url || null,
      });
      console.log("SECTION IMAGE:", section.image);
    }
  }

  // const blogData = {
  //   intro: blog.acf?.blog_intro || "",
  //   sections,
  // };


  const blogData = {
    intro: blog.acf?.blog_intro || "",
    content: blog.content?.rendered || "",
  };
  return (
    <>
      <BlogsInnerHero
        title={blog.acf?.blog_title || blog.title?.rendered}
        category={blogCategory?.name || "Uncategorized"}
        image={heroImage}
      />
      <BlogsInner blog={blogData} />

      {/* <BlogsInner
        blog={{
          content: blog.content?.rendered || "",
        }}
      /> */}

      <RelatedBlogsSlider blogs={allBlogs}
        currentSlug={blog.slug} />
    </>
  );
}
