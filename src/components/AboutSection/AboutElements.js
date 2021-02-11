import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";

export const AboutContainer = styled.div`
  padding: 9rem;

  color: #ccd6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: #0a192f;

  @media screen and (max-width: 1030px) {
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media screen and (max-width: 676px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (max-width: 440px) {
    padding-right: 4.5rem;
    padding-left: 4rem;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutHeading = styled.h1`
  color: #64ffda;
  margin-bottom: 0.7rem;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const AboutBody = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 440px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 330px) {
    font-size: 0.8rem;
  }
`;
export const AboutImage = styled.img`
  display: flex;
  justify-content: center;
  width: 30rem;

  @media screen and (max-width: 1150px) {
    width: 25rem;
  }

  @media screen and (max-width: 486px) {
    width: 17rem;
  }
  @media screen and (max-width: 370px) {
    width: 12rem;
  }
`;

export const AboutTechnologies = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 838px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TechnologyText = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 440px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 330px) {
    font-size: 0.8rem;
  }
`;

export const TechnologyLogos = styled.div`
  margin-top: 0.5rem;
  color: #64ffda;
  font-size: 2rem;

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
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
