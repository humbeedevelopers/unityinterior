"use client";
import Image from "next/image";
import "./CityHero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";

// import BannerImg1 from "@/images/contactusbannner.png";
// import BannerImg2 from "@/images/projectDummy.png";

const CityHero = ({ projects = [] }) => {
  // static data (inside file only)
  // const images = [BannerImg1, BannerImg2];

  // if (!images.length) return null;
  const images = projects
    .map((project) => project.images?.[0]) // only first image
    .filter(Boolean) // remove undefined
    .slice(0, 4);

  //     const images = projects.flatMap((project) => {
  //   const group = project?.acf?.project_images;
  //   return group?.main_image?.url ? [group.main_image] : [];
  // });

  if (!images.length) return null;

  return (
    <section className="cityHero">
      <div className="cityHero__container">

        <div className="cityHero__header">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="cityHero__title">
            PROJECTS IN<br /> AHMEDABAD
          </motion.h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="cityHero__subtitle">
            Lorem Ipsum is simply dummy
            text of the printing and
            typesetting industry.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="cityHero__imageWrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="cityHero__swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={img || `Project banner ${index + 1}`}
                  width={img.width || 1200}
                  height={img.height || 800}
                  // src={img}
                  // alt={`City banner ${index + 1}`}
                  className="cityHero__image"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="cityHero__cta">
            AHMEDABAD
          </button>
        </div>

      </div>
    </section>
  );
};

export default CityHero;
