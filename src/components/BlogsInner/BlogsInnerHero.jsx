"use client";

import Image from "next/image";
import "./BlogsInnerHero.scss";

const BlogsInnerHero = ({ title, category, image }) => {
  return (
    <section className="blogsInnerHero">
      <h1 className="blogsInnerHero__title">
        {title}
      </h1>
      <div className="blogsInnerHero__imageWrap">
        <Image
          src={image}
          alt={title}
          className="blogsInnerHero__image"
        />

        <div className="blogsInnerHero__overlay" />
        <div className="blogsInnerHero__content">
          <span className="blogsInnerHero__category">
            {category}
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogsInnerHero;
