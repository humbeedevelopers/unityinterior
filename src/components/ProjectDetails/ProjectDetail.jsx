// "use client";

// import { useState, useMemo } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import "./ProjectDetail.scss";
// import DummyImf from "@/images/projectDummy.png";
// import LocationSvg from "@/images/location.svg";

// const TABS = [
//   "ALL PROJECTS",
//   "3D VISUALIZATION",
//   "RESIDENTIAL INTERIOR",
//   "COMMERCIAL INTERIOR",
//   "ARCHITECTURE",
// ];

// const PROJECTS_DATA = [
//   {
//     id: 1,
//     title: "Luxury Bedroom",
//     category: "RESIDENTIAL INTERIOR",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "luxury-bedroom",
//   },
//   {
//     id: 2,
//     title: "Modern Bedroom",
//     category: "RESIDENTIAL INTERIOR",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "modern-bedroom",
//   },
//   {
//     id: 3,
//     title: "3D Bedroom Render",
//     category: "3D VISUALIZATION",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "3d-bedroom-render",
//   },
//   {
//     id: 4,
//     title: "Commercial Space",
//     category: "COMMERCIAL INTERIOR",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "commercial-space",
//   },
//   {
//     id: 5,
//     title: "Architectural Room",
//     category: "ARCHITECTURE",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "architectural-room",
//   },
//   {
//     id: 6,
//     title: "Premium Interior",
//     category: "RESIDENTIAL INTERIOR",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "premium-interior",
//   },
//    {
//     id: 7,
//     title: "Premium Interior",
//     category: "RESIDENTIAL INTERIOR",
//     location: "AHMEDABAD",
//     image: DummyImf,
//     slug: "premium-interior",
//   },

// ];

// const INITIAL_COUNT = 6;

// const ProjectDetail = () => {
//   const [activeTab, setActiveTab] = useState("ALL PROJECTS");
//   const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
//   const router = useRouter();

//   const filteredProjects = useMemo(() => {
//     if (activeTab === "ALL PROJECTS") return PROJECTS_DATA;
//     return PROJECTS_DATA.filter(
//       (item) => item.category === activeTab
//     );
//   }, [activeTab]);

//   const visibleProjects = filteredProjects.slice(0, visibleCount);

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

//   const handleCardClick = (slug) => {
//     router.push(`/projects/${slug}`);
//   };

//   return (
//     <section className="Projectdetail">
//       <div className="Projectdetail__container">
        
//         {/* Sidebar Tabs */}
//         <aside className="Projectdetail__sidebar">
//           {TABS.map((tab) => (
//             <button
//               key={tab}
//               className={`Projectdetail__tab ${
//                 activeTab === tab ? "is-active" : ""
//               }`}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setVisibleCount(INITIAL_COUNT);
//               }}
//             >
//               {tab}
//             </button>
//           ))}
//         </aside>

//         {/* Projects Grid */}
//         <div className="Projectdetail__content">
//           <div className="Projectdetail__grid">
//             {visibleProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="Projectdetail__card"
//                 onClick={() => handleCardClick(project.slug)}
//               >
//                 <div className="Projectdetail__image">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className="ProjectImgMain"
//                   />
//                 </div>

//                 <div className="Projectdetail__info">
//                   <span className="Projectdetail__location">
//                     <Image src={LocationSvg} alt="location" className="Projectdetail__locationsvg" />
//                     <p> {project.location}</p>
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {visibleCount < filteredProjects.length && (
//             <div className="Projectdetail__loadmore">
//               <button onClick={handleLoadMore}>LOAD MORE</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetail;
