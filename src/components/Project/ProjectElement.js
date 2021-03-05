import styled from "styled-components";
import { VscTools } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiArduino } from "react-icons/si";

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
  margin-top: 1rem;

  @media screen and (max-width: 480px) {
    width: 17rem;
  }

  @media screen and (max-width: 350px) {
    width: 15rem;
    height: 17rem;
  }
`;

export const TopProjectIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolsIcon = styled(VscTools)`
  font-size: 2rem;

  @media screen and (max-width: 350px) {
    font-size: 1.6rem;
  }
`;

export const GithubIcon = styled(AiFillGithub)`
  font-size: 1.7rem;
  margin-left: 0.5rem;
  color: #64ffda;
  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const HackathonIcon = styled(FiExternalLink)`
  font-size: 1.7rem;
  color: #64ffda;
  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;
export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const ProjectHeader = styled.h2`
  color: #64ffda;
  font-weight: bold;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.1rem;
  }
`;

export const ProjectBody = styled.p``;
export const BottomProjectIcons = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-evenly;
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

export const ArduinoLogo = styled(SiArduino)`
  color: #00979c;
`;
