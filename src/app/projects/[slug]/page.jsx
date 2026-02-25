// src/app/projects/[slug]/page.jsx

import ProjectSlugClient from "./ProjectSlugClient";

async function getProjectData(slug) {
  const res = await fetch(
    `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?slug=${slug}&acf_format=standard`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }

  const data = await res.json();
  return data[0] || null;
}

async function getAllProjects() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?acf_format=standard",
    { next: { revalidate: 60 } }
  );

  return res.json();
}


// metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return {
      title: "Project Not Found | Unity Interior",
      // description: "",
    };
  }
  const projectTitle =
    project.title?.rendered?.replace(/<[^>]*>?/gm, "") || "Project";
  console.log("TITLE TYPE:", typeof projectTitle);
  console.log("TITLE :", projectTitle);
  return {
    title: `${projectTitle} | UNITY INTERIOR`,
    description: project.acf?.project_subtitle || "",
  };
}
// related project slider 
async function getRelatedProjects(currentId) {
  const res = await fetch(
    `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?acf_format=standard`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  // Remove current project
  const filtered = data.filter((p) => p.id !== currentId);

  // Transform to clean structure
  return filtered.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered || "",
    location: p.acf?.project_location || "",
    image: p.acf?.project_images?.main_image?.url || "",
  }));
}


export default async function ProjectSlugPage({ params }) {
  // console.log("PARAMS:", params);
  const { slug } = await params;
  console.log("SLUG:", slug);
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <p>This project does not exist.</p>
      </div>
    );
  }

  // const allProjects = await getAllProjects();

  // const relatedProjects = allProjects.filter(
  //   (item) => item.slug !== project.slug
  // );
  const relatedProjects = await getRelatedProjects(project.id);
  console.log("Related Projects Count:", relatedProjects.length);
console.log("Related Projects Data:", relatedProjects);

  return (
    <ProjectSlugClient
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}

// import { PROJECTS_DATA } from "@/app/projects/data";
// import ProjectSlugClient from "./ProjectSlugClient";

// // REQUIRED for static export
// export async function generateStaticParams() {
//   return PROJECTS_DATA.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export default async function ProjectSlugPage({ params }) {
//   // const { slug } = await params;
//   const { slug } = await params;

//   const projectData = PROJECTS_DATA.find(
//     (item) => item.slug === slug
//   );

//   if (!projectData) {
//     return (
//       <div style={{ padding: "80px", textAlign: "center" }}>
//         <h1>Project Not Found</h1>
//         <p>This project does not exist.</p>
//       </div>
//     );
//   }

//   const relatedProjects = PROJECTS_DATA.filter(
//     (item) => item.slug !== projectData.slug
//   );

//   return (
//     <ProjectSlugClient
//       project={projectData}
//       relatedProjects={relatedProjects}
//     />
//   );
// };

// // export default ProjectSlugPage;
