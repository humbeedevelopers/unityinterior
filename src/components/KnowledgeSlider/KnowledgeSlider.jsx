"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import BannerImg from "@/images/KnowlwdgeSliderBanner.png";
import "swiper/css";
import "swiper/css/navigation";
import "./KnowledgeSlider.scss";

const knowledgeData = [
    {
        id: 1,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 2,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 3,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 4,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 5,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 6,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
    {
        id: 7,
        title: "Wardrobe Hinges",
        description:
            "The Ultimate Guide to Wardrobe Hinges: Choosing the Right Hardware for Your Hinged and Sliding Wardrobes",
        image: BannerImg,
    },
];

const KnowledgeSpace = () => {
    return (
        <section className="knowledge-space">
            <div className="knowledge-space__container">
                <div className="knowledge-space__header">
                    <h2 className="knowledge-space__title">
                        Knowledge <br /> Space
                    </h2>

                    <div className="knowledge-space__nav">
                        <button className="knowledge-space__btn knowledge-space__btn--prev">
                            ←
                        </button>
                        <button className="knowledge-space__btn knowledge-space__btn--next">
                            →
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
                    speed={3500} 
                    autoplay={{
                        delay: 2500, 
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
                    {knowledgeData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <article className="knowledge-card">
                                <div className="knowledge-card__image">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="knowledge-card__img"
                                    />
                                    <span className="knowledge-card__badge">
                                        {/* {item.title} */}
                                    </span>
                                </div>

                                <div className="knowledge-card__content">
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default KnowledgeSpace;
