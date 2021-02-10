import React from "react";
import Project from "../Project";
import { ProjectsContainer, ProjectItems } from "./ProjectsElements";
const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectItems>
        <Project projectLink={"https:www.nba.com"} html={true} react={true} />
      </ProjectItems>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
