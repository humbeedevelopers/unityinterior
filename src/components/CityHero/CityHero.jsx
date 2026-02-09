"use client";

import Image from "next/image";
import "./CityHero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// static images
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
          <h2 className="cityHero__title">PROJECTS IN<br /> AHMEDABAD</h2>

          <p className="cityHero__subtitle">
            Lorem Ipsum is simply dummy
            text of the printing and
            typesetting industry.
          </p>
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
