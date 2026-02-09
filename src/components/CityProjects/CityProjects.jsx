"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PROJECTS_DATA } from "@/app/projects/data";
import { useRouter } from "next/navigation";
import "./CityProjects.scss";
import LocationSvg from "@/images/location.svg";

const INITIAL_COUNT = 9;

const CityProjects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const router = useRouter();

  const visibleProjects = useMemo(() => {
    return PROJECTS_DATA.slice(0, visibleCount);
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleCardClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section className="CityProjects">
      <div className="CityProjects__container">

        
        <div className="CityProjects__grid">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="CityProjects__card"
              onClick={() => handleCardClick(project.slug)}
            >
              <div className="CityProjects__image">
                {project.image && project.image.length > 1 ? (
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    speed={600}
                    className="CityProjects__swiper"
                  >
                    {project.image.map((img, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={img}
                          alt={`${project.title} ${index + 1}`}
                          className="CityProjects__img"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="CityProjects__img"
                    fill
                  />
                )}
              </div>

              <div className="CityProjects__info">
                <p className="CityProjects__title">{project.title}</p>

                <span className="CityProjects__location">
                  <Image
                    src={LocationSvg}
                    alt="location"
                    className="CityProjects__locationsvg"
                  />
                  <p>{project.location}</p>
                </span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < PROJECTS_DATA.length && (
          <div className="CityProjects__loadmore">
            <button onClick={handleLoadMore}>LOAD MORE</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CityProjects;
