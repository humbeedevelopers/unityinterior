import "./NumbersSec.scss";
import Image from "next/image";
import NumbersImage from "@/images/Numbersectionimg.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";

const NumbersSec = () => {
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
            THE NUMBERS
          </motion.h6>
          <p className="numbers__subtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="numbers__image">
            <Image
              src={NumbersImage}
              alt="Interior decor"
            />
          </div>
        </div>

        {/* Right Grid */}
        <div className="numbers__grid">
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
            {/* numbers__card--dark */}
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSec;
