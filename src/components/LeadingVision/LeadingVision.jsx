"use client";

import { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import Image from "next/image";
import "./LeadingVision.scss";
import BgImage from "@/images/leadingvisionimg.png";
import PersonImage from "@/images/lvinnerimg.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LeadingVision = () => {
  const imageRef = useRef(null);
  const sectionRefL = useRef(null);
  useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    gsap.fromTo(sectionRefL.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRefL.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(imageRef.current,
      { y: -100, scale: 1.5, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          scrub: 2,
        },
      }
    );

  }, sectionRefL);

  return () => ctx.revert();

}, []);

  return (
    <section className="leading-vision" ref={sectionRefL}>
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
         <ParagraphTextReveal>LEADING <br /><p>the VISION</p></ParagraphTextReveal> 
        </h2>

        <div className="leading-vision__card">
          <div className="leading-vision__image" ref={imageRef}>
            <Image
              src={PersonImage}
              alt="Leader"
              width={280}
              height={360}
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
