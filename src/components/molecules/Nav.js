import React from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../const/pages";
import styled from "styled-components";
import NavItem from "../atoms/NavItem";
import logo from "../../assets/images/logo.png";

const StyledUlWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${({ home }) => (home ? "0 15%" : "0")};
  transform: translateY(${({ home }) => (home ? "-50%" : 0)});
`;

const StyledImg = styled.img`
  height: 2rem;
`;

const Nav = ({ home }) => {
  const navigationView = home
    ? [
        <StyledUlWrapper home>
          <NavItem as={NavLink} to={pages.aboutUs.path} black>
            O Nas
          </NavItem>
          <NavItem as={NavLink} to={pages.benefits.path} black>
            Zalety
          </NavItem>
          <StyledImg src={logo} />
          <NavItem as={NavLink} to={pages.offer.path}>
            Oferta
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
          <NavItem as={NavLink} to={pages.offer.path}>
            Oferta
          </NavItem>
          <NavItem as={NavLink} to={pages.contact.path}>
            Kontakt
          </NavItem>
        </StyledUlWrapper>,
      ];

  return <>{navigationView}</>;
};

export default Nav;
