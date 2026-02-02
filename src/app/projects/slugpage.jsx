// "use client";

// import { useEffect } from "react";
// import ProjectDetail from "@/components/ProjectDetails/ProjectDetail";
// import DummyImf from "@/images/projectDummy.png";

// // Static data for now (can be API later)
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
// ];

// const ProjectSlugPage = ({ params }) => {
//   const { slug } = params;

//   const projectData = PROJECTS_DATA.find(
//     (item) => item.slug === slug
//   );

//   useEffect(() => {
//     if (projectData) {
//       document.title = `${projectData.title} | Unity Interior`;
//     } else {
//       document.title = "Project Not Found | Unity Interior";
//     }
//   }, [projectData]);

//   if (!projectData) {
//     return (
//       <div style={{ padding: "80px", textAlign: "center" }}>
//         <h1>Project Not Found</h1>
//         <p>This project does not exist.</p>
//       </div>
//     );
//   }

//   return <ProjectDetail project={projectData} />;
// };

// export default ProjectSlugPage;
