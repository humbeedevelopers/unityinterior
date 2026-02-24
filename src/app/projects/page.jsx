import ProjectBanner from "@/components/ProjectBanner/ProjectBanner";
import ProjectDetail from "@/components/ProjectDetails/ProjectDetail";

async function getData() {
  const [projectsRes, categoriesRes] = await Promise.all([
    fetch(
      "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?_embed&acf_format=standard",
      { next: { revalidate: 60 } }
    ),
    fetch(
      "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/project-category",
      { next: { revalidate: 60 } }
    ),
  ]);

  if (!projectsRes.ok || !categoriesRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const projects = await projectsRes.json();
  const categories = await categoriesRes.json();

  return { projects, categories };
}

export default async function ProjectsPage() {
  const { projects, categories } = await getData();

  return (
    <>
      <ProjectBanner />
      <ProjectDetail projects={projects} categories={categories} />
    </>
  );
}



// import ProjectBanner from "@/components/ProjectBanner/ProjectBanner";
// import ProjectDetail from "@/components/ProjectDetails/ProjectDetail";
// import { useEffect } from "react";
// async function getProjects() {
//   const res = await fetch(
//     "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?_embed",
//     {
//       next: { revalidate: 60 }, // ISR
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch projects");
//   return res.json();
// }

// export default async function ProjectsPage() {
//   const projects = await getProjects();
//   useEffect(() => {
//     document.title = "Projects | Unity Interior";
//   }, []);

//   return (
//     <div>
//       <ProjectBanner />
//         <ProjectDetail projects={projects} />
//     </div>
//   )

// }

// // export default ProjectsPage;
