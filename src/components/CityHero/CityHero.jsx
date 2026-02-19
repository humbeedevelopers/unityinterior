"use client";

import Image from "next/image";
import "./CityHero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";

import BannerImg1 from "@/images/contactusbannner.png";
import BannerImg2 from "@/images/projectDummy.png";

const CityHero = () => {
  // static data (inside file only)
  const images = [BannerImg1, BannerImg2];

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
            {/* <ParagraphTextReveal> */}
            PROJECTS IN<br /> AHMEDABAD
            {/* </ParagraphTextReveal> */}
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
                  alt={`City banner ${index + 1}`}
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
