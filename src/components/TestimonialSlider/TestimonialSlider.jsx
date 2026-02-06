"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import BannerImg from "@/images/quote_testimonial.png";
import PrevIcon from "@/images/PrevIcon.svg";
import NextIcon from "@/images/NextIcon.svg";
import "swiper/css";
import "swiper/css/navigation";
import "./TestimonialSlider.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const TestimonialData = [
    {
        id: 1,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was",
        image: BannerImg,
        name: "Ravi Gupta",
        location: "Ahmedabad",
    },
    {
        id: 2,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was",
        image: BannerImg,
        name: "Ravi Gupta",
        location: "Mumbai",
    },
    {
        id: 3,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was",
        image: BannerImg,
        name: "Ravi Gupta",
        location: "Ahmedabad",
    },
    {
        id: 4,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was",
        image: BannerImg,
        name: "Ravi Gupta",
        location: "Mumbai",
    },
    {
        id: 5,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was",
        image: BannerImg,
        name: "Ravi Gupta",
        location: "Ahmedabad",
    },
    {
        id: 6,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was",
        image: BannerImg,
        name: "Ravi Gupta",
        location: "Mumbai",
    },


];

const TestimonialSlider = () => {
    return (
        <section className="Testimonial-slider">
            <div className="Testimonial-slider__container">
                <div className="Testimonial-slider__header">
                    <h2 className="Testimonial-slider__title">
                        <ParagraphTextReveal>
                            CLIENTS ABOUT <br /> OUR WORK</ParagraphTextReveal>
                    </h2>

                    <div className="Testimonial-slider__nav">
                        <button className="Testimonial-slider__btn Testimonial-slider__btn--prev">
                            <Image
                                src={PrevIcon}
                                alt="Icons"
                                width={20}
                                height={20}
                                className="Icon"
                            />
                        </button>
                        <button className="Testimonial-slider__btn Testimonial-slider__btn--next">
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
                        prevEl: ".Testimonial-slider__btn--prev",
                        nextEl: ".Testimonial-slider__btn--next",
                    }}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 1000,
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
                    className="Testimonial-slider__slider"
                >
                    {TestimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <article className="testimonial-card">
                                {/* <div className="knowledge-card__image">
                                  
                                </div> */}

                                {/* <div className="testimonial-card__content">
                                    <Image
                                        src={item.image}
                                        alt="Testimonial Image"
                                        className="testimonial-card__img"
                                    />
                                    <p>{item.description}</p>
                                </div> */}
                                <div className="testimonial-card__content">
                                    <Image
                                        src={item.image}
                                        alt="Testimonial Image"
                                        className="testimonial-card__img"
                                    />

                                    <div className="testimonial-card__text">
                                        <p>{item.description}</p>

                                        <div className="testimonial-card__author">
                                            <div className="testimonial-card__avatar">
                                                {/* image will come later */}
                                            </div>

                                            <div className="testimonial-card__authorInfo">
                                                <h4>{item.name}</h4>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSlider;
