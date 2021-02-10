import React from "react";
import Typewriter from "typewriter-effect";
import image from "../../images/danielkurien.png";
import {
  HeroContainer,
  HeroContent,
  TypeWriterH1,
  ProfileImage,
} from "./HeroElements";
const HeroSection = ({ test }) => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <ProfileImage src={image} />
        <TypeWriterH1>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span style="color: #ccd6f6;">Daniel Kurien </span>'
                )
                .typeString("The Developer")
                .pauseFor(2000)
                .deleteChars(13)
                .typeString("The Innovator")
                .pauseFor(2000)
                .deleteChars(13)
                .typeString("The Designer")
                .pauseFor(2000)
                .deleteChars(12)
                .typeString("The Creator")
                .pauseFor(2000)
                .deleteChars(11)
                .start();
            }}
          />
        </TypeWriterH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
