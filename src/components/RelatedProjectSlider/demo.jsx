"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./RelatedProjectSlider.scss";

import LocationSvg from "@/images/location.svg";

const RelatedProjectSlider = ({ projects = [] }) => {
    const router = useRouter();
    if (!projects.length) return null;
    console.log("Total projects received:", projects.length);
    projects.forEach((p, i) => {
        console.log(`Slide ${i + 1}:`, p.title);
    });
    // const sliderProjects =
    //   projects.length < 6 ? [...projects, ...projects] : projects;


    return (
        <section className="RelatedProjects">
            <div className="RelatedProjects__container">
                <div className="RelatedProjects__title">
                    <h2>
                        RELATED <br /> PROJECTS
                    </h2>
                </div>


                <div className="RelatedProjects__slider">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".knowledge-space__btn--prev",
                            nextEl: ".knowledge-space__btn--next",
                        }}
                        loop={true}
                        spaceBetween={40}
                        slidesPerView={3}
                        speed={3500}
                        // freeMode={{
                        //     enabled: true,
                        //     momentum: false,
                        // }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={true}
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
                        className="RelatedProjects__swiper"
                    >
                        {projects.map((project) => (
                            <SwiperSlide
                                key={project.id}
                                className="RelatedProjects__slide"
                                onClick={() => router.push(`/projects/${project.slug}`)}
                            >
                                <div className="RelatedProjects__card">
                                    <div className="RelatedProjects__image">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 80vw, 420px"
                                            className="RelatedProjects__imageInner"
                                        />
                                    </div>

                                    <div className="RelatedProjects__info">
                                        <Image src={LocationSvg} alt="location" className="SvgLocation" />
                                        <span>{project.location}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default RelatedProjectSlider;
