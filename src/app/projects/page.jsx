"use client";

// import ProjectDetail from "@/components/ProjectDetails/ProjectDetail";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | Unity Interior";
  }, []);

  return (
    <div>
      {/* <ProjectDetail /> */}
    </div>
  )

}

export default ProjectsPage;
