import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink spy={true} smooth={true} to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink spy={true} smooth={true} to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink spy={true} smooth={true} to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink spy={true} smooth={true} to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
