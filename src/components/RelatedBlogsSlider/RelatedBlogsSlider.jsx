"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import PrevIcon from "@/images/PrevIcon.svg";
import NextIcon from "@/images/NextIcon.svg";

import "swiper/css";
import "swiper/css/navigation";
import "./RelatedBlogsSlider.scss";
import { blogsMeta } from "@/app/blogs/[slug]/head";


const RelatedBlogsSlider = ({ currentSlug }) => {
    const relatedBlogs = blogsMeta.filter(
        (blog) => blog.slug !== currentSlug
    );
    return (
        <section className="related-blogs">
            <div className="related-blogs__container">
                <div className="related-blogs__header">
                    <h2 className="related-blogs__title">
                        Related <br /> Blogs
                    </h2>

                    <div className="related-blogs__nav">
                        <button className="related-blogs__btn related-blogs__btn--prev">
                            <Image src={PrevIcon} alt="Previous" width={20} height={20} />
                        </button>
                        <button className="related-blogs__btn related-blogs__btn--next">
                            <Image src={NextIcon} alt="Next" width={20} height={20} />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".related-blogs__btn--prev",
                        nextEl: ".related-blogs__btn--next",
                    }}
                    loop
                    speed={1500}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={24}
                    slidesPerView={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    className="related-blogs__slider"
                >
                    {relatedBlogs.map((blog) => (
                        <SwiperSlide key={blog.slug}>
                            <article className="related-blog-card">
                                <div className="related-blog-card__image">
                                    <Image
                                        src={blog.heroImage}
                                        alt={blog.title}
                                        fill
                                        className="related-blog-card__img"
                                    />
                                </div>

                                <div className="related-blog-card__content">
                                    <div className="related-blog-card__contentInner">

                                        <span className="related-blog-card__category">
                                            {blog.category}
                                        </span>
                                        <p className="related-blog-card__date">
                                            {blog.blogsDate}
                                        </p>
                                    </div>
                                    <h3 className="related-blog-card__title">
                                        {blog.title}
                                    </h3>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RelatedBlogsSlider;
