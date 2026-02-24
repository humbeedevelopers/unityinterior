"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import BannerImg from "@/images/KnowlwdgeSliderBanner.png";
import PrevIcon from "@/images/PrevIcon.svg";
import NextIcon from "@/images/NextIcon.svg";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./KnowledgeSlider.scss";
// import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const knowledgeData = [
    {
        id: 1,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 2,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 3,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 4,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 5,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 6,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 7,
        description1:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
];

const KnowledgeSpace = ({ title = "", items = [] }) => {
    if (!items?.length) return null;

    return (
        <section className="knowledge-space">
            <div className="knowledge-space__container">
                <div className="knowledge-space__header">
                    {title && (
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0 }}
                            viewport={{ once: true }}
                            className="knowledge-space__title">
                            {title}
                            {/* Knowledge <br /> Space */}
                        </motion.h2>
                    )}


                    <div className="knowledge-space__nav">
                        <button className="knowledge-space__btn knowledge-space__btn--prev">
                            <Image
                                src={PrevIcon}
                                alt="Icons"
                                width={20}
                                height={20}
                                className="Icon"
                            />
                        </button>
                        <button className="knowledge-space__btn knowledge-space__btn--next">
                            <Image
                                src={NextIcon}
                                alt="Icons"
                                width={20}
                                height={20}
                                className="Icon"
                            />
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".knowledge-space__btn--prev",
                        nextEl: ".knowledge-space__btn--next",
                    }}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={24}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    className="knowledge-space__slider"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <article className="knowledge-card">
                                <div className="knowledge-card__image">
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt="Knowledge Image"
                                            fill
                                            className="knowledge-card__img"
                                        />
                                    )}
                                </div>

                                <div className="knowledge-card__content">
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                    {/* {knowledgeData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <article className="knowledge-card">
                                <div className="knowledge-card__image">
                                    <Image
                                        src={item.image}
                                        alt="Interior image"
                                        className="knowledge-card__img"
                                    />
                                    <span className="knowledge-card__badge">
                                    </span>
                                </div>

                                <div className="knowledge-card__content">
                                    <p>{item.description1}</p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))} */}
                </Swiper>
            </div>
        </section>
    );
};

export default KnowledgeSpace;
