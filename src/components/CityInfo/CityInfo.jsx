"use client";
import "./CityInfo.scss";
import { motion } from "framer-motion";

const CityInfo = ({
  underHeroPara = "",
  manifestoLabel = "THE DESIGN MANIFESTO",
  para1 = "",
  para2 = "",
}) => {
  return (
    <section className="cityInfo">
      {underHeroPara && (
        <div>
          <h2 className="cityInfo__SubDesc">{underHeroPara}</h2>
        </div>
      )}
      <div className="cityInfo__container">

        <div className="cityInfo__left">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="cityInfo__title">
            {manifestoLabel}
          </motion.h2>
        </div>

        <div className="cityInfo__middle">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="cityInfo__description">
            {para1}
          </motion.p>
        </div>

        <div className="cityInfo__right">
          <div className="cityInfo__textWrapper">
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="cityInfo__rightText">
              {para2}
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CityInfo;
