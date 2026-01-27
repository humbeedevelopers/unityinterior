"use client";

import React from "react";
import Image from "next/image";
import "./Experience.scss";
import ImgMain from "@/images/image1.png";
import ImgSideTop from "@/images/image2.png";
import ImgSideBottom from "@/images/image3.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__container">
        {/* Left Content */}
        <div className="experience__content">
          <span className="experience__count">20</span>
          <h2 className="experience__title">
            <ParagraphTextReveal>
              WHERE ELEGANCE <br /> MEETS DESIRE</ParagraphTextReveal>
          </h2>

          <div className="experience__divider">
            <span>YEARS OF EXPERIENCE</span>
          </div>

          <p className="experience__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        {/* Right Images */}
        <div className="experience__images">
          <div className="experience__image experience__image--main">
            <Image src={ImgMain} alt="Interior Design"  />
          </div>

          <div className="experience__image experience__image--top">
            <Image src={ImgSideTop} alt="Luxury Space"  />
          </div>

          <div className="experience__image experience__image--bottom">
            <Image src={ImgSideBottom} alt="Elegant Interior"  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
