"use client";

import Image from "next/image";
import "./ProjectHero.scss";
import LocationSvg from "@/images/location.svg";
import { motion } from "framer-motion";

const ProjectHero = ({ project }) => {
  // if (!project) return null;

  // const { title, description, location, image } = project;
  if (!project) return null;

  //  Extract from WP structure
  const title = project?.title?.rendered || "";
  const subtitle = project?.acf?.project_subtitle || "";
  const location = project?.acf?.project_location || "";
  const mainImage = project?.acf?.project_images?.main_image;

  if (!mainImage?.url) return null;
  return (
    <section className="ProjectHero">
      <div className="ProjectHero__wrapper">
        {/* Background Image */}
        <div className="ProjectHero__image">
          <Image
           src={mainImage.url}
            alt={mainImage.alt || title}
            // src={image}
            // alt={title}
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
              {subtitle}
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
