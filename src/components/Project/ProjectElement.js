import styled from "styled-components";
import { VscTools } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";

export const ProjectContainer = styled.div`
  border-radius: 3%;
  text-align: center;
  background-color: #112240;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  width: 21rem;
  height: 23rem;
  padding: 1rem;
`;

export const TopProjectIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolsIcon = styled(VscTools)`
  font-size: 2rem;
`;

export const GithubIcon = styled(AiFillGithub)`
  font-size: 1.7rem;
  color: #64ffda;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ProjectHeader = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

export const ProjectBody = styled.p``;
export const BottomProjectIcons = styled.div`
  font-size: 1.5rem;
`;
export const HtmlLogo = styled(AiFillHtml5)`
  color: #f16529;
`;

export const CssLogo = styled(DiCss3)`
  color: #2965f1;
`;

export const JSLogo = styled(IoLogoJavascript)`
  color: #f0db4f;
`;

export const ReactLogo = styled(FaReact)`
  color: #61dbfb;
`;

export const NodeLogo = styled(FaNodeJs)`
  color: #68a063;
`;
