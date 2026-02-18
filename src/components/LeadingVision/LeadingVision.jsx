"use client";

// import { useEffect, useRef } from "react";
import Image from "next/image";
import "./LeadingVision.scss";
import { motion } from "framer-motion";
import BgImage from "@/images/leadingvisionimg.png";
import PersonImage from "@/images/lvinnerimg.png";
// import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const LeadingVision = () => {
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
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="leading-vision" >
      <div className="leading-vision__bg">
        <Image
          src={BgImage}
          alt="Leading the vision background"
        //   fill
        //   priority
        />
      </div>

      {/* Content */}
      <div className="leading-vision__content container">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
          className="leading-vision__title">
          {/* <ParagraphTextReveal> */}
          LEADING <br /><p>the VISION</p>
          {/* </ParagraphTextReveal>  */}
        </motion.h2>

        <div className="leading-vision__card">
          <motion.div
            variants={slideLeft}
            className="leading-vision__image">
            <Image
              src={PersonImage}
              alt="Leader"
              width={280}
              height={360}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="leading-vision__description">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default LeadingVision;
