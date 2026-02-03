"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RelatedProjectSlider.scss";

import LocationSvg from "@/images/location.svg";
// import PrevIcon from "@/images/PrevIcon.svg";
// import NextIcon from "@/images/NextIcon.svg";

const RelatedProjectSlider = ({ projects = [] }) => {
    const router = useRouter();
    if (!projects.length) return null;

    return (
        <section className="related-projects">
            <div className="related-projects__container">

                <div className="related-projects__header">
                    <h2 className="related-projects__title">
                        RELATED <br /> PROJECTS
                    </h2>

                    {/* <div className="related-projects__nav">
                        <button className="related-projects__btn related-projects__btn--prev">
                            <Image src={PrevIcon} alt="Prev" width={20} height={20} />
                        </button>
                        <button className="related-projects__btn related-projects__btn--next">
                            <Image src={NextIcon} alt="Next" width={20} height={20} />
                        </button>
                    </div> */}
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    // navigation={{
                    //     prevEl: ".related-projects__btn--prev",
                    //     nextEl: ".related-projects__btn--next",
                    // }}
                    loop={projects.length > 2}
                    speed={1500}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={24}
                    slidesPerView={2}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 2 },
                    }}
                    className="related-projects__slider"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <article
                                className="related-project-card"
                                onClick={() => router.push(`/projects/${project.slug}`)}
                            >
                                <div className="related-project-card__image">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="related-project-card__img"
                                    />
                                </div>

                                <div className="related-project-card__info">
                                    <Image src={LocationSvg} alt="location" />
                                    <span>{project.location}</span>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RelatedProjectSlider;
