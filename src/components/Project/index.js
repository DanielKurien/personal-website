import React from "react";
import {
  ProjectContainer,
  ToolsIcon,
  TopProjectIcons,
  GithubIcon,
  ProjectHeader,
  BottomProjectIcons,
  HtmlLogo,
  CssLogo,
  JSLogo,
  ReactLogo,
  NodeLogo,
  ProjectText,
  ProjectBody,
} from "./ProjectElement";
const Project = ({
  projectLink,
  projectName,
  projectText,
  html,
  css,
  js,
  react,
  node,
}) => {
  return (
    <ProjectContainer>
      <TopProjectIcons>
        <ToolsIcon />
        <a target="_blank" href={projectLink}>
          <GithubIcon />
        </a>
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
      </BottomProjectIcons>
    </ProjectContainer>
  );
};

export default Project;
