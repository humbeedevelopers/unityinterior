"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./ProjectDetail.scss";
import LocationSvg from "@/images/location.svg";

const INITIAL_COUNT = 6;

const ProjectDetail = ({ projects = [], categories = [] }) => {
  const [activeTab, setActiveTab] = useState("ALL PROJECTS");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const router = useRouter();

  //  Format Projects
  const formattedProjects = useMemo(() => {
    return projects.map((item) => {
      const gallery = item?.acf?.project_images;

      let images = [];

      if (gallery) {
        Object.keys(gallery).forEach((key) => {
          const img = gallery[key];

          if (img && img.url) {
            images.push(img);
          }

        });
      }
      // Limit to first 5 images only
      images = images.slice(0, 5);

      return {
        id: item.id,
        slug: item.slug,
        title: item.title.rendered,
        location: item.acf?.project_location || "",
        categoryIds: item["project-category"] || [],
        images,
      };
    });
  }, [projects]);

  //  Dynamic Tabs
  const tabs = useMemo(() => {
    return [
      { id: "all", name: "ALL PROJECTS" },
      ...categories.map((cat) => ({
        id: cat.id,
        name: cat.name,
      })),
    ];
  }, [categories]);

  // Filtering Logic
  const filteredProjects = useMemo(() => {
    if (activeTab === "ALL PROJECTS") return formattedProjects;

    const activeCategory = categories.find(
      (cat) => cat.name === activeTab
    );

    if (!activeCategory) return [];

    return formattedProjects.filter((project) =>
      project.categoryIds.includes(activeCategory.id)
    );
  }, [activeTab, formattedProjects, categories]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="Projectdetail">
      <div className="Projectdetail__container">

        {/* Sidebar */}
        <aside className="Projectdetail__sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`Projectdetail__tab ${activeTab === tab.name ? "is-active" : ""
                }`}
              onClick={() => {
                setActiveTab(tab.name);
                setVisibleCount(INITIAL_COUNT);
              }}
            >
              {tab.name}
            </button>
          ))}
        </aside>

        {/* Projects Grid */}
        <div className="Projectdetail__content">
          <div className="Projectdetail__grid">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                className="Projectdetail__card"
                onClick={() => router.push(`/projects/${project.slug}`)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="Projectdetail__image">

                  {/* Multiple Images */}
                  {project.images.length > 1 ? (
                    <Swiper
                      modules={[Pagination]}
                      className="Projectdetail__swiper"
                      pagination={{ clickable: true }}
                      speed={600}
                    >
                      {project.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={img.url}
                            alt={project.title}
                            width={img.width}
                            height={img.height}
                            className="ProjectImgMain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    project.images[0] && (
                      <Image
                        src={project.images[0].url}
                        alt={project.title}
                        width={project.images[0].width}
                        height={project.images[0].height}
                        className="ProjectImgMain"
                      />
                    )
                  )}

                </div>

                <div className="Projectdetail__info">
                  <p className="Projectdetail__infoTitle">
                    {project.title}
                  </p>

                  <span className="Projectdetail__location">
                    <Image
                      src={LocationSvg}
                      alt="location"
                      className="Projectdetail__locationsvg"
                    />
                    <p>{project.location}</p>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < filteredProjects.length && (
            <div className="Projectdetail__loadmore">
              <button onClick={handleLoadMore}>
                LOAD MORE
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;