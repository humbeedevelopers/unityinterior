import Image from "next/image";
import "./ContactUsHero.scss";
import ContactHeroImg from "@/images/contactusbannner.png";
// import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion, AnimatePresence } from "framer-motion";

const ContactUsHero = () => {
  return (
    <section className="contactUsHero">
      <div className="contactUsHero__container">

        <div className="contactUsHero__header">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="contactUsHero__title">
            {/* <ParagraphTextReveal> */}
            CONTACT US
            {/* </ParagraphTextReveal> */}
          </motion.h2>

          <motion.p 
          initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
          className="contactUsHero__subtitle">
            Lorem Ipsum is simply dummy
            text of the printing and
            typesetting industry.
          </motion.p>
        </div>


        <div className="contactUsHero__imageWrapper">
          <Image
            src={ContactHeroImg}
            alt="Contact Us Interior"
            // fill
            className="contactUsHero__image"
          />


          <button className="contactUsHero__cta">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
