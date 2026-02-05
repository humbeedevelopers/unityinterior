"use client";

import ProjectBanner from "@/components/ProjectBanner/ProjectBanner";
import ProjectDetail from "@/components/ProjectDetails/ProjectDetail";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | Unity Interior";
  }, []);

  return (
    <div>
      <ProjectBanner />
      <ProjectDetail />
    </div>
  )

}

export default ProjectsPage;
