"use client";

import Image from "next/image";
import "./ProjectBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

import "swiper/css";
import "swiper/css/navigation";
import { PROJECTS_DATA } from "@/app/projects/data";
import BannerImg1 from "@/images/contactusbannner.png";
import BannerImg2 from "@/images/projectDummy.png";

const ProjectBanner = ({ slug }) => {
    // find project by slug
  const project = PROJECTS_DATA.find(
    (item) => item.slug === slug
  );

  // normalize images (array or single)
//   const images = Array.isArray(project?.image)
//     ? project.image
//     : project?.image
//     ? [project.image]
//     : [];
const images = Array.isArray(PROJECTS_DATA[0].image)
  ? PROJECTS_DATA[0].image
  : [PROJECTS_DATA[0].image];


  if (!images.length) return null;
  return (
    <section className="projectBanner">
      <div className="projectBanner__container">

        <div className="projectBanner__header">
          <h2 className="projectBanner__title"><ParagraphTextReveal>PROJECTS</ParagraphTextReveal></h2>

          <p className="projectBanner__subtitle">
            <ParagraphTextReveal>
            Lorem Ipsum is simply dummy
            text of the printing and
            typesetting industry.
            </ParagraphTextReveal>
          </p>
        </div>  

        {/* Slider */}
        <div className="projectBanner__imageWrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            className="projectBanner__swiper"
            pagination={{ clickable: true }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Project banner ${index + 1}`}
                //   fill
                  className="projectBanner__image"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="projectBanner__cta">
            CONTACT US
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectBanner;
