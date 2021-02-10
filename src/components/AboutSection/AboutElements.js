import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";

export const AboutContainer = styled.div`
  padding: 9rem 9rem 9rem 9rem;

  color: #ccd6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: #0a192f;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutHeading = styled.h1`
  color: #64ffda;
  margin-bottom: 0.7rem;
`;

export const AboutBody = styled.p`
  font-size: 1.2rem;
`;
export const AboutImage = styled.img`
  display: flex;
  justify-content: center;
  width: 30rem;
`;

export const AboutTechnologies = styled.div`
  display: flex;
  align-items: center;
`;

export const TechnologyText = styled.p`
  font-size: 1.2rem;
`;

export const TechnologyLogos = styled.div`
  margin-top: 0.5rem;
  color: #64ffda;
  font-size: 2rem;
`;

export const HtmlLogo = styled(AiFillHtml5)`
  margin: 0 0.5rem;
  &:hover {
    color: #f16529;
  }
`;

export const CssLogo = styled(DiCss3)`
  margin: 0 0.5rem;
  &:hover {
    color: #2965f1;
  }
`;

export const JSLogo = styled(IoLogoJavascript)`
  margin: 0 0.5rem;
  &:hover {
    color: #f0db4f;
  }
`;

export const ReactLogo = styled(FaReact)`
  margin: 0 0.5rem;
  &:hover {
    color: #61dbfb;
  }
`;

export const NodeLogo = styled(FaNodeJs)`
  margin: 0 0.5rem;
  &:hover {
    color: #68a063;
  }
`;
