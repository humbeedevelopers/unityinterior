"use client";

import {React, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import WhiteIconPrev from "@/images/WhitePrev.svg";
import WhiteIconNext from "@/images/WhiteNext.svg";
import ProjectImg from "@/images/ProjectSliderImg.png";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "./ProjectSlider.scss";
import { motion, AnimatePresence } from "framer-motion";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";


const slides = [
  {
    image: ProjectImg,
    city: "Ahmedabad",
    href: "/",
  },
  {
    image: ProjectImg,
    city: "Mumbai",
    href: "/",
  },
];
const textVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};
const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="projectSlider">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        speed={1500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".projectSlider__next",
          prevEl: ".projectSlider__prev",
        }}
        className="projectSlider__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="projectSlider__slide">
              <Image
                src={slide.image}
                alt={slide.city}
                // fill
                // priority={index === 0}
                className="projectSlider__image"
              />

              <div className="projectSlider__overlay">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="projectSlider__subtitle">
                    EXPERIENCE THE
                    <br />
                    <span>EXCEPTIONAL UP CLOSE</span>

                  </motion.p>
                </AnimatePresence>
                <div className="projectSlider__footer">
                  <h4>{slide.city}</h4>
                  <Link
                    href={slide.href}
                    className="projectSlider__ProjectBtn"
                  >
                    View Project
                  </Link>
                  {/* <button>View Project</button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="projectSlider__nav">
        <button className="projectSlider__prev">
          <Image
            src={WhiteIconPrev}
            alt="Icons"
            width={20}
            height={20}
          />
        </button>
        <button className="projectSlider__next">
          <Image
            src={WhiteIconNext}
            alt="Icons"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
};

export default ProjectSlider;
