import React from "react";
import { FaBars } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcons,
  NavIcon,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home">Daniel Kurien</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks spy={true} smooth={true} to="home">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks spy={true} smooth={true} to="about">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks spy={true} smooth={true} to="projects">
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks spy={true} smooth={true} to="contact">
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavIcons>
            <NavIcon target="_blank" href="https://github.com/DanielKurien">
              <AiFillGithub />
            </NavIcon>
            <NavIcon
              target="_blank"
              href="https://www.linkedin.com/in/daniel-kurien-baa824b8/"
            >
              <FiLinkedin />
            </NavIcon>
            <NavIcon target="_blank" href="https://github.com/DanielKurien">
              <HiDocumentText />
            </NavIcon>
          </NavIcons>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
