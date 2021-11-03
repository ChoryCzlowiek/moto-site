import React from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../const/pages";
import styled from "styled-components";
import NavItem from "../atoms/NavItem";

const StyledUlWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${({ home }) => (home ? "0 15%" : "0")};
  transform: translateY(${({ home }) => (home ? "-50%" : 0)});
`;

const Nav = ({ home }) => {
  const navigationView = home
    ? [
        <StyledUlWrapper home>
          <NavItem as={NavLink} to={pages.aboutUs.path}>
            O Nas
          </NavItem>
          <NavItem as={NavLink} to={pages.benefits.path}>
            Zalety
          </NavItem>
          <NavItem title as={NavLink} to={pages.home.path}>
            NAZWA
          </NavItem>
          <NavItem as={NavLink} to={pages.packages.path}>
            Pakiety
          </NavItem>
          <NavItem as={NavLink} to={pages.contact.path}>
            Kontakt
          </NavItem>
        </StyledUlWrapper>,
      ]
    : [
        <StyledUlWrapper>
          <NavItem as={NavLink} to={pages.home.path}>
            Strona Główna
          </NavItem>
          <NavItem as={NavLink} to={pages.aboutUs.path}>
            O Nas
          </NavItem>
          <NavItem as={NavLink} to={pages.benefits.path}>
            Zalety
          </NavItem>
          <NavItem as={NavLink} to={pages.packages.path}>
            Pakiety
          </NavItem>
          <NavItem as={NavLink} to={pages.contact.path}>
            Kontakt
          </NavItem>
        </StyledUlWrapper>,
      ];

  return <>{navigationView}</>;
};

export default Nav;
