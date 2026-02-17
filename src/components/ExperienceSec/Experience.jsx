"use client";


import { useEffect, useRef } from "react";
import Image from "next/image";
import "./Experience.scss";
import ImgMain from "@/images/image1.png";
import ImgSideTop from "@/images/image2.png";
import ImgSideBottom from "@/images/image3.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const sectionRef = useRef(null);
  const imageRef2 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 0, scale: 1.2, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  // const eleganceContainer = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      imageRef1.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef1.current,
          start: "top 90%",
          end: "bottom 50%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      imageRef2.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  return (
    <section className="experience" ref={sectionRef}>
      <div className="experience__container">
        {/* Left Content */}
        <div className="experience__content">
          <span className="experience__count">20</span>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="experience__title">

            WHERE ELEGANCE <br /> MEETS DESIRE
          </motion.h2>

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
        <div className="experience__images" ref={imageRef}>
          <div className="experience__image experience__image--main" ref={imageRef1}>
            <Image src={ImgMain} alt="Interior Design" />
          </div>

          <div className="experience__image experience__image--top" ref={imageRef2}>
            <Image src={ImgSideTop} alt="Luxury Space" />
          </div>

          <div className="experience__image experience__image--bottom">
            <Image src={ImgSideBottom} alt="Elegant Interior" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
