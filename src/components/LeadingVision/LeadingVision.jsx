"use client";

import React from "react";
import Image from "next/image";
import "./LeadingVision.scss";
import BgImage from "@/images/leadingvisionimg.png";
import PersonImage from "@/images/lvinnerimg.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const LeadingVision = () => {
  return (
    <section className="leading-vision">
      <div className="leading-vision__bg">
        <Image
          src={BgImage}
          alt="Leading the vision background"
        //   fill
        //   priority
        />
      </div>

      {/* Content */}
      <div className="leading-vision__content container">
        <h2 className="leading-vision__title">
         <ParagraphTextReveal>LEADING <span>the VISION</span></ParagraphTextReveal> 
        </h2>

        <div className="leading-vision__card">
          <div className="leading-vision__image">
            <Image
              src={PersonImage}
              alt="Leader"
              width={280}
              height={360}
              priority
            />
          </div>

          <p className="leading-vision__description">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadingVision;
