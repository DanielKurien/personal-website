import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0a192f;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 3/2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TypeWriterH1 = styled.h1`
  display: inline-block;
  color: #64ffda;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ProfileImage = styled.img`
  margin-top: 5rem;
  margin-bottom: 2rem;
  width: 20rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.25rem solid #ccd6f6;

  @media screen and (max-width: 480px) {
    width: 17rem;
  }
`;
