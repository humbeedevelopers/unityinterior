"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PROJECTS_DATA } from "@/app/projects/data";
import { useRouter } from "next/navigation";
import "./ProjectDetail.scss";
import DummyImf from "@/images/projectDummy.png";
import LocationSvg from "@/images/location.svg";
import { motion } from "framer-motion";


const TABS = [
  "ALL PROJECTS",
  "3D VISUALIZATION",
  "RESIDENTIAL INTERIOR",
  "COMMERCIAL INTERIOR",
  "ARCHITECTURE",
];

const INITIAL_COUNT = 6;

const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("ALL PROJECTS");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const router = useRouter();

  const filteredProjects = useMemo(() => {
    if (activeTab === "ALL PROJECTS") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(
      (item) => item.category === activeTab
    );
  }, [activeTab]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleCardClick = (slug) => {
    router.push(`/projects/${slug}`);
    console.log("Clicked slug:", slug);
  };

  return (
    <section className="Projectdetail">
      <div className="Projectdetail__container">

        {/* Sidebar Tabs */}
        <aside className="Projectdetail__sidebar">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`Projectdetail__tab ${activeTab === tab ? "is-active" : ""
                }`}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(INITIAL_COUNT);
              }}
            >
              {tab}
            </button>
          ))}
        </aside>

        {/* Projects Grid */}
        <div className="Projectdetail__content">
          <div
            key={activeTab}

            className="Projectdetail__grid">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                className="Projectdetail__card"
                onClick={() => handleCardClick(project.slug)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: project.id * 0.05
                }}

              >
                {/* <div className="Projectdetail__image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="ProjectImgMain"
                  />
                </div> */}
                <div className="Projectdetail__image">
                  {project.image && project.image.length > 1 ? (
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      // loop={true}
                      // autoplay={{
                      //   delay: 2500,
                      //   disableOnInteraction: false,
                      //   pauseOnMouseEnter: true,
                      // }}
                      pagination={{ clickable: true }}
                      speed={600}
                      className="Projectdetail__swiper"
                    >
                      {project.image.map((img, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={img}
                            alt={`${project.title} ${index + 1}`}
                            className="ProjectImgMain"
                          // fill
                          // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="ProjectImgMain"
                      fill
                    />
                  )}
                </div>


                <div className="Projectdetail__info">
                  <p className="Projectdetail__infoTitle"> {project.title}</p>
                  <span className="Projectdetail__location">
                    <Image src={LocationSvg} alt="location" className="Projectdetail__locationsvg" />

                    <p> {project.location}</p>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < filteredProjects.length && (
            <div className="Projectdetail__loadmore">
              <button onClick={handleLoadMore}>LOAD MORE</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
