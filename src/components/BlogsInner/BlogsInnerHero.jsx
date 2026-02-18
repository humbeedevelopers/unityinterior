"use client";

import Image from "next/image";
import "./BlogsInnerHero.scss";
import { motion } from "framer-motion";

const BlogsInnerHero = ({ title, category, image }) => {
  return (
    <section className="blogsInnerHero">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0 }}
        viewport={{ once: true }}
        className="blogsInnerHero__title">
        {title}
      </motion.h1>
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
