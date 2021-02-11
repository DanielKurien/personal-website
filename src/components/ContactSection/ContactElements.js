import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const ContactContainer = styled.div`
  padding: 8rem 7rem 6rem 7rem;
  color: #ccd6f6;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-color: #0a192f;
  margin-top: 10rem;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const IconP = styled.p`
  font-size: 1.5rem;
`;
export const ContactIcons = styled.div`
  padding: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
`;
export const ContactHeading = styled.h1`
  color: #64ffda;
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MailIcon = styled(BiMailSend)`
  font-size: 2.5rem;
  margin: 0 2rem;
  color: #ff7f7f;
`;
export const LinkedinIcon = styled(AiFillLinkedin)`
  font-size: 2.5rem;
  margin: 0 2rem;
  color: #0e76a8;
`;
export const GithubIcon = styled(AiFillGithub)`
  font-size: 2.5rem;
  margin: 0 2rem;
  color: #6cc644;
`;
