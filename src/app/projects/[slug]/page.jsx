"use client";

import { use, useEffect } from "react";
import { PROJECTS_DATA } from "@/app/projects/data";
// import ProjectDetail from "@/components/ProjectDetails/ProjectDetail";
import DummyImf from "@/images/projectDummy.png";
import ProjectInner from "@/components/ProjectInner/ProjectInner";
import RelatedProjectSlider from "@/components/RelatedProjectSlider/RelatedProjectSlider";
import ProjectHero from "@/components/ProjectHero/ProjectHero";

// Static data for now (can be API later)
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




const ProjectSlugPage = ({ params }) => {
    const { slug } = use(params);

    const projectData = PROJECTS_DATA.find(
        (item) => item.slug === slug

    );
    //     const relatedProjects = PROJECTS_DATA.filter(
    //     (item) =>
    //         item.category === projectData.category &&
    //         item.slug !== projectData.slug
    // );

    const relatedProjects = PROJECTS_DATA.filter(
        (item) => item.slug !== projectData.slug
    );


    // If u want all project except current then use :
    // const relatedProjects = PROJECTS_DATA.filter(
    //     (item) => item.slug !== projectData.slug
    // );
    console.log("URL slug:", slug);
    console.log("All slugs:", PROJECTS_DATA.map(p => p.slug));


    useEffect(() => {
        document.title = projectData
            ? `${projectData.title} | Unity Interior`
            : "Project Not Found | Unity Interior";
    }, [projectData]);

    if (!projectData) {
        return (
            <div style={{ padding: "80px", textAlign: "center" }}>
                <h1>Project Not Found</h1>
                <p>This project does not exist.</p>
            </div>
        );
    }

    return (
        <>
            <ProjectHero project={projectData} />
            <ProjectInner project={projectData} />

            {relatedProjects.length > 0 && (
                <RelatedProjectSlider projects={relatedProjects} />
            )}
        </>
    );

    // return <ProjectInner project={projectData} />;
};

export default ProjectSlugPage;
