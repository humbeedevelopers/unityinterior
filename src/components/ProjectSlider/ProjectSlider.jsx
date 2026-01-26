"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import ProjectImg from "@/images/ProjectSliderImg.png"
import "swiper/css";
import "swiper/css/navigation";
import "./ProjectSlider.scss";

const slides = [
  {
    image: ProjectImg,
    city: "Ahmedabad",
  },
  {
    image: ProjectImg,
    city: "Mumbai",
  },
];

const ProjectSlider = () => {
  return (
    <section className="projectSlider">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
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
                fill
                priority={index === 0}
                className="projectSlider__image"
              />

              <div className="projectSlider__overlay">
                <p className="projectSlider__subtitle">
                  EXPERIENCE THE
                  <br />
                  <span>EXCEPTIONAL UP CLOSE</span>
                </p>

                <div className="projectSlider__footer">
                  <h4>{slide.city}</h4>
                  <button>View Project</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="projectSlider__nav">
        <button className="projectSlider__prev">
          ←
        </button>
        <button className="projectSlider__next">
          →
        </button>
      </div>
    </section>
  );
};

export default ProjectSlider;
