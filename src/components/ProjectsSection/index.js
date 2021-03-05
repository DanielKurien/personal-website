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
          projectText="My personal website where I keep my programming projects and can find information to get in touch with me. This is the site you are on right now."
        />
        <Project
          projectLink={"https://github.com/DanielKurien/pchack2019"}
          hackathonLink={"https://devpost.com/software/vision-belt"}
          hackathon={true}
          html={true}
          css={true}
          js={true}
          arduino={true}
          react={true}
          projectName="The Smart Belt"
          projectText="The Smart Belt helps a person who is visually impaired, become aware of any possible safety hazards around them. 
          Project won 'Best Smart City Hack' at the PcHacks 2019 Hackathon."
        />
        <Project
          projectLink={"https://github.com/DanielKurien/HackTheNorth2019"}
          hackathonLink={"https://devpost.com/software/autosave"}
          hackathon={true}
          html={true}
          css={true}
          js={true}
          node={true}
          devpost={true}
          projectName="AutoSave"
          projectText="AutoSave helps the user save money automatically, by putting money in their savings account when they purchase something. Project was created at the Hack the North 2019 Hackathon."
        />
      </ProjectItems>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
