"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "@/app/projects/data";
import { useRouter } from "next/navigation";
import "./ProjectDetail.scss";
import DummyImf from "@/images/projectDummy.png";
import LocationSvg from "@/images/location.svg";

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
              className={`Projectdetail__tab ${
                activeTab === tab ? "is-active" : ""
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
          <div className="Projectdetail__grid">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="Projectdetail__card"
                onClick={() => handleCardClick(project.slug)}
              >
                <div className="Projectdetail__image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="ProjectImgMain"
                  />
                </div>

                <div className="Projectdetail__info">
                  <span className="Projectdetail__location">
                    <Image src={LocationSvg} alt="location" className="Projectdetail__locationsvg" />
                    <p> {project.location}</p>
                  </span>
                </div>
              </div>
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
