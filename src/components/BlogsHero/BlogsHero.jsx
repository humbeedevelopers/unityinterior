"use client";

import Image from "next/image";
import "./BlogsHero.scss";
import LocationSvg from "@/images/location.svg";
import Banner from "@/images/contactusbannner.png";

const BlogsHero = () => {
//   if (!project) return null;

//   const { title, description, location, image } = project;

  return (
    <section className="ProjectHero">
      <div className="ProjectHero__wrapper">
        {/* Background Image */}
        <div className="ProjectHero__image">
          <Image
            src={Banner}
            alt="none"
            fill
            className="ProjectHero__img"
          />
        </div>

     
        <div className="ProjectHero__content">
          <div className="ProjectHero__left">
            <h1 className="ProjectHero__title">
              BLOGS
            </h1>
          </div>

          <div className="ProjectHero__right">
            <p className="ProjectHero__desc">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
        </div>

        {/* Location Badge */}
        <div className="ProjectHero__location">
          {/* <Image src={LocationSvg} alt="location" /> */}
          <span>ALL BLOGS</span>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
