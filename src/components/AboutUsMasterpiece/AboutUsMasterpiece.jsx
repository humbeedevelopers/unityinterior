"use client";

import Image from "next/image";
import "./AboutUsMasterpiece.scss";
import Mcircle from "@/images/masterpieceCircle.png"
import StaticCircle from "@/images/designnew.png"
import FlowerDesign from "@/images/flowerdesign.png"
import PersonImg from "@/images/masterpieceBanner.png";
import { motion, AnimatePresence } from "framer-motion";

const AboutUsMasterpiece = () => {
  return (
    <section className="aboutUsMasterpiece">
      <div className="aboutUsMasterpiece__container">


        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
          className="aboutUsMasterpiece__textLayer">
          <span className="aboutUsMasterpiece__subtitle">
            CREATING
          </span>

          <h1 className="aboutUsMasterpiece__title">
            MASTER<span>PIECE</span>
          </h1>

          <p className="aboutUsMasterpiece__description">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="aboutUsMasterpiece__imageLayer">
            <Image
              src={PersonImg}
              alt="Masterpiece Person"
              priority
              className="aboutUsMasterpiece__image"
            />
          </motion.div>
        </AnimatePresence>

        <div className="aboutUsMasterpiece__circleWrapper">

          {/* Static Outer Circle */}
          <div className="aboutUsMasterpiece__outerCircle">
            <Image
              src={StaticCircle}
              alt="Static Circle"
              fill
              sizes="260px"
              className="circleImg"
            />
          </div>

          {/* Rotating Flower at Center */}
          <motion.div
            className="aboutUsMasterpiece__flower"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear"
            }}
          >
            <Image
              src={FlowerDesign}
              alt="Rotating Flower"
              fill
              sizes="120px"
              className="circleImg"
            />
          </motion.div>

        </div>

        {/* <div className="aboutUsMasterpiece__circleImage">
          <Image
            src={Mcircle}
            alt="Decorative circle"
          />
        </div> */}

        {/* <div className="aboutUsMasterpiece__circle">
          <span />
        </div> */}

      </div>
    </section>
  );
};

export default AboutUsMasterpiece;
