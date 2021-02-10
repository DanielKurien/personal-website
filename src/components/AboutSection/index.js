import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutImage,
  AboutHeading,
  AboutBody,
  AboutTechnologies,
  TechnologyText,
  TechnologyLogos,
  HtmlLogo,
  CssLogo,
  JSLogo,
  ReactLogo,
  NodeLogo,
} from "../AboutSection/AboutElements";
import image from "../../images/coding.svg";
const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutText>
        <AboutHeading>Hi, I'm Daniel.</AboutHeading>
        <AboutBody>
          A student from Mississauga highly interested in the field of Computer
          Science. Specifically intrigued in Web Development and learning about
          newer web technologies and frameworks.
        </AboutBody>

        <AboutTechnologies>
          <TechnologyText>Technologies I've Worked With:</TechnologyText>
          <TechnologyLogos>
            <HtmlLogo />
            <CssLogo />
            <JSLogo />
            <ReactLogo />
            <NodeLogo />
          </TechnologyLogos>
        </AboutTechnologies>
      </AboutText>

      <AboutImage src={image} />
    </AboutContainer>
  );
};

export default AboutSection;
