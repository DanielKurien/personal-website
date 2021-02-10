import React from "react";
import Project from "../Project";
import {
  ProjectsContainer,
  ProjectItems,
  ProjectsHeading,
} from "./ProjectsElements";
const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsHeading>Personal Projects</ProjectsHeading>
      <ProjectItems>
        <Project
          projectLink={"https://github.com/DanielKurien/personal-website"}
          html={true}
          css={true}
          js={true}
          react={true}
          projectName="Portfolio Website"
          projectText="My personal website where I keep all my programming projects and where can you can get to know me better.
          The site you're looking at right now :)"
        />
        <Project
          projectLink={"sample"}
          html={true}
          css={true}
          js={true}
          react={true}
          node={true}
          projectName="Sample"
          projectText="sample project"
        />
        <Project
          projectLink={"sample"}
          html={true}
          css={true}
          js={true}
          react={true}
          node={true}
          projectName="Sample"
          projectText="sample project"
        />
      </ProjectItems>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
