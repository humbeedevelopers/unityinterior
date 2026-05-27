"use client";
import Image from "next/image";
import "./CityHero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const CityHero = ({ title = "", description = "", images = [] }) => {
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
            {title}
          </motion.h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="cityHero__subtitle">
            {description}
          </motion.p>
        </div>

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
                  src={img.url}
                  alt={img.alt || `${title} ${index + 1}`}
                  width={img.width || 1200}
                  height={img.height || 800}
                  className="cityHero__image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default CityHero;
