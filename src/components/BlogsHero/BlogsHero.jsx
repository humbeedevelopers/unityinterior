"use client";

import Image from "next/image";
import "./BlogsHero.scss";
import LocationSvg from "@/images/location.svg";
import Banner from "@/images/contactusbannner.png";

const BlogsHero = () => {
//   if (!project) return null;

//   const { title, description, location, image } = project;

  return (
    <section className="blogsHero">
      <div className="blogsHero__wrapper">
        {/* Background Image */}
        <div className="blogsHero__image">
          <Image
            src={Banner}
            alt="none"
            fill
            className="blogsHero__img"
          />
        </div>

     
        <div className="blogsHero__content">
          <div className="blogsHero__left">
            <h1 className="blogsHero__title">
              BLOGS
            </h1>
          </div>

          <div className="blogsHero__right">
            <p className="blogsHero__desc">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
        </div>

        {/* Location Badge */}
        <div className="blogsHero__location">
          {/* <Image src={LocationSvg} alt="location" /> */}
          <span>ALL BLOGS</span>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
