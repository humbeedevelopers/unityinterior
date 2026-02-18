"use client";

import Image from "next/image";
import "./ProjectHero.scss";
import LocationSvg from "@/images/location.svg";
import { motion } from "framer-motion";

const ProjectHero = ({ project }) => {
  if (!project) return null;

  const { title, description, location, image } = project;

  return (
    <section className="ProjectHero">
      <div className="ProjectHero__wrapper">
        {/* Background Image */}
        <div className="ProjectHero__image">
          <Image
            src={image}
            alt={title}
            fill
            className="ProjectHero__img"
          />
        </div>


        <div className="ProjectHero__content">
          <div className="ProjectHero__left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
              className="ProjectHero__title">
              {title}
            </motion.h1>
          </div>

          <div className="ProjectHero__right">
            <motion.p
            initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
             className="ProjectHero__desc">
              {description}
            </motion.p>
          </div>
        </div>

        {/* Location Badge */}
        <div className="ProjectHero__location">
          <Image src={LocationSvg} alt="location" />
          <span>{location}</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
