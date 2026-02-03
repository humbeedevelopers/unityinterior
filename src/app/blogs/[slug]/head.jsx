// import { blogs } from "../data";

// export default async function Head({ params }) {
//   const { slug } = await params;

//   const blog = blogs.find((b) => b.slug === slug);
//   if (!blog) return null;

//   return (
//     <>
//       <title>{blog.slug.replace(/-/g, " ")} | Blog</title>
//       <meta name="description" content={blog.intro} />
//     </>
//   );
// }
import BlogsImg from "@/images/KnowlwdgeSliderBanner.png";

export const blogsMeta = [
  {
    slug: "wardrobe-hinges-guide",
    title:
      "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
    category: "Architecture",
    heroImage: BlogsImg,
  },
  {
    slug: "interior-hardware-trends",
    title:
      "Modern Interior Hardware Trends You Should Know in 2026",
    category: "Interior",
    heroImage: BlogsImg,
  },
  {
    slug: "architecture-hardware-design",
    title:
      "How Architecture Hardware Impacts Space Design",
    category: "Architecture",
    heroImage: BlogsImg,
  },
  {
    slug: "luxury-wardrobe-accessories",
    title:
      "Choosing Premium Wardrobe Accessories for Luxury Homes",
    category: "Uncategorized",
    heroImage: BlogsImg,
  },
  {
    slug: "sliding-vs-hinged-wardrobes",
    title:
      "Sliding vs Hinged Wardrobes: What Works Best?",
    category: "Architecture",
    heroImage: BlogsImg,
  },
  {
    slug: "modular-interior-planning",
    title:
      "Interior Planning Tips Using Modular Hardware",
    category: "Interior",
    heroImage: BlogsImg,
  },

];
