"use client"
import "./NumbersSec.scss";
import Image from "next/image";
import NumbersImage from "@/images/Numbersectionimg.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";

const NumbersSec = ({ label,
  subtext,
  image,
  card1,
  card2,
  card3,
  card4, }) => {
  return (
    <section className="numbers">
      <div className="numbers__container">
        {/* Left Content */}
        <div className="numbers__left">
          <motion.h6
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="numbers__label">
            {/* THE NUMBERS */}
            {label}
          </motion.h6>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="numbers__subtext">
            {subtext}
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. */}
          </motion.p>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="numbers__image">
            <Image
              src={NumbersImage}
              alt="Interior decor"
            />
            {/* {image && (
              <Image
                src={image}
                alt="Numbers section"
                fill
              />
            )} */}
          </motion.div>
        </div>

        {/* Right Grid */}
        <div className="numbers__grid">

          {[card1, card2, card3, card4].map((card, index) => (
            <div
              key={index}
              className={`numbers__card ${index === 3 ? "numbers__card--dark" : ""
                }`}
            >
              <h2>{card?.number}</h2>
              <span>{card?.title}</span>
              <p>{card?.description}</p>
            </div>
          ))}

        </div>
        {/* <div className="numbers__grid">
          <div className="numbers__card">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="numbers__card">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="numbers__card">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="numbers__card numbers__card--dark "

          >
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NumbersSec;
