"use client";

import { useEffect } from "react";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import ProjectInner from "@/components/ProjectInner/ProjectInner";
import RelatedProjectSlider from "@/components/RelatedProjectSlider/RelatedProjectSlider";
import ProjectInfo from "@/components/ProjectInfo/ProjectInfo";

const ProjectSlugClient = ({ project, relatedProjects }) => {
  useEffect(() => {
    document.title = `${project.title} | Unity Interior`;
  }, [project]);

  return (
    <>
      <ProjectHero project={project} />
       <ProjectInfo />
      <ProjectInner project={project} />
     

      {relatedProjects.length > 0 && (
        <RelatedProjectSlider projects={relatedProjects} />
      )}
    </>
  );
};

export default ProjectSlugClient;
