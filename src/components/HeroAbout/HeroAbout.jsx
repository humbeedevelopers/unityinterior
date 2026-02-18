'use client';

import Image from 'next/image';
import Banner from "@/images/AboutUsBanner.png";
import "./HeroAbout.scss";
import Link from 'next/link';
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section className="heroAbout">
      <div className="heroAbout__container">
        <div className="heroAbout__imageWrapper">
          <Image
            src={Banner}
            alt="About Us Interior"
            className="heroAbout__image"
          />

          <div className="heroAbout__content">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
              className="heroAbout__title">ABOUT US</motion.h1>
            <Link href={"https://www.youtube.com/channel/UCQLqYlIthw4Buk6XKW4lqNg"} target='_blank'>
              <button className="heroAbout__button">
                VISIT MY YOUTUBE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
