import { PROJECTS_DATA } from "@/app/projects/data";
import ProjectSlugClient from "./ProjectSlugClient";

// REQUIRED for static export
export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectSlugPage({ params }) {
  // const { slug } = await params;
  const { slug } = await params;

  const projectData = PROJECTS_DATA.find(
    (item) => item.slug === slug
  );

  if (!projectData) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <p>This project does not exist.</p>
      </div>
    );
  }

  const relatedProjects = PROJECTS_DATA.filter(
    (item) => item.slug !== projectData.slug
  );

  return (
    <ProjectSlugClient
      project={projectData}
      relatedProjects={relatedProjects}
    />
  );
};

// export default ProjectSlugPage;
