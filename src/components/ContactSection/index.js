import React from "react";
import {
  ContactContainer,
  ContactIcons,
  ContactHeading,
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  IconP,
  IconDiv,
} from "./ContactElements";
const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeading>Contact Me</ContactHeading>
      <ContactIcons>
        <IconDiv>
          <a href="mailto:danielmathewkurien@gmail.com" target="_blank">
            <MailIcon />
          </a>
          <IconP>Email</IconP>
        </IconDiv>
        <IconDiv>
          <a
            href="https://www.linkedin.com/in/daniel-kurien-baa824b8/?originalSubdomain=ca"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <IconP>Linkedin</IconP>
        </IconDiv>
        <IconDiv>
          <a href="https://github.com/DanielKurien" target="_blank">
            <GithubIcon />
          </a>
          <IconP>Github</IconP>
        </IconDiv>
      </ContactIcons>
    </ContactContainer>
  );
};

export default ContactSection;
