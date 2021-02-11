import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  border-bottom: 2px solid #64ffda;
  background: #0a192f;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.p`
  letter-spacing: 0.25rem;
  font-weight: 600;
  font-family: "Dosis", sans-serif;
  color: #64ffda;
  text-transform: uppercase;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  cursor: default;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-70%, 54%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 3.3%;
  margin-right: 2.2%;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  font-weight: 700;
  color: #ccd6f6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #64ffda;
  }
  &:active {
    color: #ccd6f6;
    border-bottom:2px solid #64ffda;
  }
  }
`;

export const NavIcons = styled.nav`
  display: flex;
  margin-left: 1%;
  margin-right: 6%;
  align-items: center;
`;

export const NavIcon = styled.a`
  white-space: nowrap;
  margin-top: 8px;
  padding: 14px 10px;
  color: #64ffda;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
