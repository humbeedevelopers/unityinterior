"use client";

// import { useEffect, useRef } from "react";
import Image from "next/image";
import "./LeadingVision.scss";
// import { motion } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BgImage from "@/images/leadingvisionimg.png";
import PersonImage from "@/images/lvinnerimg.png";
// import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const LeadingVision = ({
  bgImage,
  titleLine1,
  titleLine2,
  image,
  description,
}) => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  //  Strong background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  // Background zoom
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  //  Foreground image float (stronger)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

  //  Slight blur removal while scrolling in
  const blur = useTransform(scrollYProgress, [0, 0.4], ["6px", "0px"]);

  // Parallax transforms
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const fadeUp = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const slideLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      // variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="leading-vision" >
      <motion.div className="leading-vision__bg"    style={{
          y: bgY,
          scale: bgScale,
          filter: blur
        }}
      >
        {/* {bgImage && ( */}
        <Image
          src={BgImage}
          fill
          sizes="100vw"
          alt="Leading the vision background"
        //   fill
        //   priority
        />
        {/* )} */}
        {/* {bgImage && (
          <Image
            src={bgImage}
            alt="Leading vision background"
            fill
            className="leading-vision__bg-img"
            sizes="100vw"
          />
        )} */}
      </motion.div>

      {/* Content */}
      <div className="leading-vision__content container">
        <motion.h2
        //  style={{
        //     y: useTransform(scrollYProgress, [0, 1], ["80px", "-80px"])
        //   }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
          className="leading-vision__title">
          {/* <ParagraphTextReveal> */}
          {titleLine1} <br />
          <p>{titleLine2}</p>
          {/* LEADING <br /><p>the VISION</p> */}
          {/* </ParagraphTextReveal>  */}
        </motion.h2>

        <div className="leading-vision__card">
          <motion.div
            // variants={slideLeft}
            // style={{ y: imageY }}
            // style={{
            //   y: bgY,
            //   scale: bgScale,
            //   filter: blur
            // }}
             style={{ y: imageY }}
            className="leading-vision__image">
            {/* <Image
              src={PersonImage}
              alt="Leader"
              width={280}
              height={360}
            /> */}
            {image && (
              <Image
                src={image}
                alt="Leader"
                width={280}
                height={360}
              />
            )}
          </motion.div>

          <motion.p
            // style={{
            //   y: useTransform(scrollYProgress, [0, 1], ["60px", "-60px"])
            // }}
            variants={fadeUp}
            className="leading-vision__description">
            {description}
            {/* Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. */}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default LeadingVision;
