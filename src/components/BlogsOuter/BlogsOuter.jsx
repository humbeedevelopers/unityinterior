"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogsImg from "@/images/KnowlwdgeSliderBanner.png";
import { motion, AnimatePresence } from "framer-motion";
import "./BlogsOuter.scss";

const BLOGS_PER_PAGE = 6;

const categories = [
    "All Category",
    "Architecture",
    "Interior",
    "Uncategorized",
];

const blogsData = [
    {
        id: 1,
        title:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        category: "Architecture",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "wardrobe-hinges-guide",
    },
    {
        id: 2,
        title:
            "Modern Interior Hardware Trends You Should Know in 2026",
        category: "Interior",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "interior-hardware-trends",
    },
    {
        id: 3,
        title:
            "How Architecture Hardware Impacts Space Design",
        category: "Architecture",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "architecture-hardware-design",
    },
    {
        id: 4,
        title:
            "Choosing Premium Wardrobe Accessories for Luxury Homes",
        category: "Uncategorized",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "luxury-wardrobe-accessories",
    },
    {
        id: 5,
        title:
            "Sliding vs Hinged Wardrobes: What Works Best?",
        category: "Architecture",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "sliding-vs-hinged-wardrobes",
    },
    {
        id: 6,
        title:
            "Interior Planning Tips Using Modular Hardware",
        category: "Interior",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "modular-interior-planning",
    },
    {
        id: 7,
        title:
            "Interior Planning Tips Using Modular Hardware",
        category: "Interior",
        date: "January 5, 2026",
        image: BlogsImg,
        slug: "modular-interior-planning",
    },
];

const BlogsOuter = () => {
    const [activeCategory, setActiveCategory] = useState("All Category");
    const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

    const filteredBlogs = useMemo(() => {
        if (activeCategory === "All Category") return blogsData;
        return blogsData.filter(
            (blog) => blog.category === activeCategory
        );
    }, [activeCategory]);

    const visibleBlogs = filteredBlogs.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + BLOGS_PER_PAGE);
    };

    return (
        <section className="blogsOuter">
            <div className="blogsOuter__container">
                {/* Sidebar */}
                <aside className="blogsOuter__sidebar">
                    <ul className="blogsOuter__categories">
                        {categories.map((cat) => (
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
                        ))}
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
                                                className="blogsOuter__image"
                                            />
                                        </div>

                                        <div className="blogsOuter__meta">
                                            <span className="blogsOuter__tag">
                                                {blog.category}
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
