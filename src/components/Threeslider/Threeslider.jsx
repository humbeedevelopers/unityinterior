"use client";

// import React from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import PersonImage from "@/images/walloffame.png";
import PrevImg from "@/images/prevImg.png";
import NextImg from "@/images/nextImg.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "./Threeslider.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

// const slides = [
//     { id: 1, img1: PersonImage },
//     { id: 2, img1: PersonImage },
//     { id: 3, img1: PersonImage },
//     { id: 4, img1: PersonImage },
//     { id: 5, img1: PersonImage },
//     { id: 6, img1: PersonImage },
//     { id: 7, img1: PersonImage },
// ];
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


const slides = [
    {
        id: 1,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 2,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad1",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 3,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad2",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 4,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad3",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 5,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad4",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 6,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad5",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 7,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad6",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
    {
        id: 8,
        img1: PersonImage,
        title: "Bedroom Design in Ahmedabad7",
        desc:
            "Lorem ipsum is simply dummy text of the printing and lorem ipsum is simply dummy text.",
    },
];


const ThreeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="three-slider">
            <div className="three-slider__container">
                <h2 className="three-slider__heading"><ParagraphTextReveal>Wall of Desire</ParagraphTextReveal></h2>
                <p className="three-slider__headingText">best picked projects</p>

                <Swiper
                    effect="coverflow"
                    centeredSlides
                    loop
                    slidesPerView="auto"
                    speed={800}
                    autoplay={{
                        delay: 700,
                        disableOnInteraction: false,
                    }}
                    // spaceBetween={100}  

                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 90,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                    }
                    //   pagination={{
                    //     el: ".three-slider__pagination",
                    //     clickable: true,
                    //   }}
                    navigation={{
                        nextEl: ".three-slider__btn--next",
                        prevEl: ".three-slider__btn--prev",
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="three-slider__swiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="three-slider__slide">
                            <Image src={slide.img1} alt="slider image" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="three-slider__controls">
                    <button className="three-slider__btn three-slider__btn--prev">
                        <Image src={PrevImg} alt="slider image" />
                    </button>
                    <button className="three-slider__btn three-slider__btn--next">
                        <Image src={NextImg} alt="slider image" />
                    </button>
                    {/* <div className="three-slider__pagination" /> */}
                </div>

                <div className="three-slider__text">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <h3>{slides[activeIndex].title}</h3>
                            <p>{slides[activeIndex].desc}</p>
                        </motion.div>
                    </AnimatePresence>
                    {/* <h3>{slides[activeIndex].title}</h3>
                    <p>{slides[activeIndex].desc}</p> */}
                </div>

            </div>
        </section>
    );
};

export default ThreeSlider;
