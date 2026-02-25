"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogsImg from "@/images/KnowlwdgeSliderBanner.png";
import { motion, AnimatePresence } from "framer-motion";
import "./BlogsOuter.scss";

const BLOGS_PER_PAGE = 6;

// const categories = [
//     "All Category",
//     "Architecture",
//     "Interior",
//     "Uncategorized",
// ];

// const blogsData = [
//     {
//         id: 1,
//         title:
//             "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
//         category: "Architecture",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "wardrobe-hinges-guide",
//     },
//     {
//         id: 2,
//         title:
//             "Modern Interior Hardware Trends You Should Know in 2026",
//         category: "Interior",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "interior-hardware-trends",
//     },
//     {
//         id: 3,
//         title:
//             "How Architecture Hardware Impacts Space Design",
//         category: "Architecture",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "architecture-hardware-design",
//     },
//     {
//         id: 4,
//         title:
//             "Choosing Premium Wardrobe Accessories for Luxury Homes",
//         category: "Uncategorized",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "luxury-wardrobe-accessories",
//     },
//     {
//         id: 5,
//         title:
//             "Sliding vs Hinged Wardrobes: What Works Best?",
//         category: "Architecture",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "sliding-vs-hinged-wardrobes",
//     },
//     {
//         id: 6,
//         title:
//             "Interior Planning Tips Using Modular Hardware",
//         category: "Interior",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "modular-interior-planning",
//     },
//     {
//         id: 7,
//         title:
//             "Interior Planning Tips Using Modular Hardware",
//         category: "Interior",
//         date: "January 5, 2026",
//         image: BlogsImg,
//         slug: "modular-interior-planning",
//     },
// ];

const BlogsOuter = ({ blogs = [], categories = [] }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

    // Format blogs from WordPress
    // const formattedBlogs = useMemo(() => {
    //     return blogs.map((post) => {
    //         const category =
    //             post._embedded?.["wp:term"]?.[0]?.[0] || null;

    //         return {
    //             id: post.id,
    //             slug: post.slug,
    //             title: post.acf?.blog_title || post.title?.rendered,
    //             date: post.acf?.blog_time || "",
    //             categoryId: category?.id || null,
    //             categoryName: category?.name || "Uncategorized",
    //             image:
    //                 post.acf?.blog_banner?.url || "/fallback.jpg",
    //         };
    //     });
    // }, [blogs]);
    const formattedBlogs = blogs.map((post) => {
        const terms = post._embedded?.["wp:term"] || [];

        const blogCategory =
            terms.flat().find(
                (term) => term.taxonomy === "blog_category"
            ) || null;

        return {
            id: post.id,
            slug: post.slug,
            title: post.acf?.blog_title || post.title?.rendered,
            date: post.acf?.blog_time || "",
            categoryId: blogCategory?.id || null,
            categoryName: blogCategory?.name || "Uncategorized",
            image: post.acf?.blog_banner?.url || "/fallback.jpg",
        };
    });
    // Filter by category
    const filteredBlogs = useMemo(() => {
        if (activeCategory === "all") return formattedBlogs;

        return formattedBlogs.filter(
            (blog) => blog.categoryId === activeCategory
        );
    }, [activeCategory, formattedBlogs]);

    const visibleBlogs = filteredBlogs.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + BLOGS_PER_PAGE);
    };
    // const [activeCategory, setActiveCategory] = useState("All Category");
    // const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

    // const filteredBlogs = useMemo(() => {
    //     if (activeCategory === "All Category") return blogsData;
    //     return blogsData.filter(
    //         (blog) => blog.category === activeCategory
    //     );
    // }, [activeCategory]);

    // const visibleBlogs = filteredBlogs.slice(0, visibleCount);

    // const handleLoadMore = () => {
    //     setVisibleCount((prev) => prev + BLOGS_PER_PAGE);
    // };

    return (
        <section className="blogsOuter">
            <div className="blogsOuter__container">
                {/* Sidebar */}
                <aside className="blogsOuter__sidebar">
                    <ul className="blogsOuter__categories">
                        <li
                            className={`blogsOuter__category ${activeCategory === "all" ? "is-active" : ""
                                }`}
                            onClick={() => {
                                setActiveCategory("all");
                                setVisibleCount(BLOGS_PER_PAGE);
                            }}
                        >
                            All Category
                        </li>
                        {categories.map((cat) => (
                            <li
                                key={cat.id}
                                className={`blogsOuter__category ${activeCategory === cat.id ? "is-active" : ""
                                    }`}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setVisibleCount(BLOGS_PER_PAGE);
                                }}
                            >
                                {cat.name}
                            </li>
                        ))}
                        {/* {categories.map((cat) => (
                            <li
                                key={cat}
                                className={`blogsOuter__category ${activeCategory === cat ? "is-active" : ""
                                    }`}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setVisibleCount(BLOGS_PER_PAGE);
                                }}
                            >
                                {cat}
                            </li>
                        ))} */}
                    </ul>
                </aside>

                {/* Blogs Grid */}
                <div className="blogsOuter__content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            className="blogsOuter__grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            {visibleBlogs.map((blog) => (
                                <motion.div
                                    key={blog.id}
                                    layout
                                    className="blogsOuter__card"
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Link href={`/blogs/${blog.slug}`} className="blogsOuter__cardLink">
                                        <div className="blogsOuter__imageWrap">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="blogsOuter__image"
                                            />
                                        </div>

                                        <div className="blogsOuter__meta">
                                            <span className="blogsOuter__tag">
                                                {blog.categoryName}
                                            </span>
                                            <span className="blogsOuter__date">
                                                {blog.date}
                                            </span>
                                        </div>

                                        <h3 className="blogsOuter__title">
                                            {blog.title}
                                        </h3>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Load More */}
                    {visibleCount < filteredBlogs.length && (
                        <div className="blogsOuter__loadMoreWrap">
                            <button
                                className="blogsOuter__loadMore"
                                onClick={handleLoadMore}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogsOuter;
