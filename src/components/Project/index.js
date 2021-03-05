import React from "react";
import {
  ProjectContainer,
  ToolsIcon,
  TopProjectIcons,
  GithubIcon,
  HackathonIcon,
  ProjectHeader,
  BottomProjectIcons,
  HtmlLogo,
  CssLogo,
  JSLogo,
  ArduinoLogo,
  ReactLogo,
  NodeLogo,
  ProjectText,
  ProjectBody,
} from "./ProjectElement";
const Project = ({
  projectLink,
  hackathonLink,
  projectName,
  hackathon,
  projectText,
  html,
  css,
  js,
  react,
  node,
  arduino,
}) => {
  return (
    <ProjectContainer>
      <TopProjectIcons>
        <ToolsIcon />
        <div>
          {hackathon ? (
            <a target="_blank" href={hackathonLink}>
              <HackathonIcon />
            </a>
          ) : null}
          <a target="_blank" href={projectLink}>
            <GithubIcon />
          </a>
        </div>
      </TopProjectIcons>
      <ProjectText>
        <ProjectHeader>{projectName}</ProjectHeader>
        <ProjectBody>{projectText}</ProjectBody>
      </ProjectText>
      <BottomProjectIcons>
        {html ? <HtmlLogo /> : null}
        {css ? <CssLogo /> : null}
        {js ? <JSLogo /> : null}
        {react ? <ReactLogo /> : null}
        {node ? <NodeLogo /> : null}
        {arduino ? <ArduinoLogo /> : null}
      </BottomProjectIcons>
    </ProjectContainer>
  );
};

export default Project;
