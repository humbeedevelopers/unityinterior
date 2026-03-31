"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./ProjectBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import "swiper/css";
import "swiper/css/navigation";
// import { PROJECTS_DATA } from "@/app/projects/data";
import BannerImg1 from "@/images/contactusbannner.png";
import BannerImg2 from "@/images/projectDummy.png";

const ProjectBanner = ({ projects = [] }) => {
  // Extract all main images
  const images = projects
    .map((project) => project?.acf?.project_images?.main_image)
    .filter((img) => img && img.url)
    .slice(0, 4);


  //     const images = projects.flatMap((project) => {
  //   const group = project?.acf?.project_images;
  //   return group?.main_image?.url ? [group.main_image] : [];
  // });

  //  Debug console
  useEffect(() => {
    console.log("All Projects:", projects);
    console.log("Extracted Main Images:", images);
  }, [projects]);

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
                {/* <Image
                  src={img}
                  alt={`Project banner ${index + 1}`}
                  //   fill
                  className="projectBanner__image"
                /> */}
                <Image
                  src={img.url}
                  alt={img.alt || `Project banner ${index + 1}`}
                  width={img.width || 1200}
                  height={img.height || 800}
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
