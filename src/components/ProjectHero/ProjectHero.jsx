"use client";

import Image from "next/image";
import "./ProjectHero.scss";
import LocationSvg from "@/images/location.svg";

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
            <h1 className="ProjectHero__title">
              {title}
            </h1>
          </div>

          <div className="ProjectHero__right">
            <p className="ProjectHero__desc">
              {description}
            </p>
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
