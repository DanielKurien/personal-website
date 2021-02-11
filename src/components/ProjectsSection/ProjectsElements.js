import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding-top: 9rem;
  color: #ccd6f6;
  display: flex;
  padding-bottom: 9rem;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-color: #0a192f;

  @media screen and (max-width: 1073px) {
    height: 150vh;
  }

  @media screen and (max-width: 750px) {
    height: 200vh;
  }
`;

export const ProjectsHeading = styled.h1`
  padding-left: 0.7rem;
  padding-bottom: 1rem;
  display: flex;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
export const ProjectItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
