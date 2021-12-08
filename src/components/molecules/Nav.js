import React from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../const/pages";
import styled from "styled-components";
import NavItem from "../atoms/NavItem";
import Logo from "../atoms/Logo";

const StyledUlWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  justify-content: ${({ vertical }) => (vertical ? "center" : "space-between")};
  padding: ${({ home }) => (home ? "0 15%" : "0")};
  /* transform: translateY(${({ home }) => (home ? "-50%" : 0)}); */
  margin: ${({ vertical }) => (vertical ? ".5rem 0 0" : "0")};
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavItem = styled(NavItem)`
  margin: 0.2rem 0;
`;

const Nav = ({ home, vertical, onClick, isMenuVisible }) => {
  const navigationView = home
    ? [
        <StyledUlWrapper home>
          <NavItem as={NavLink} to={pages.oNas.path} black bold>
            O Nas
          </NavItem>
          <NavItem as={NavLink} to={pages.zalety.path} black bold>
            Zalety
          </NavItem>
          <NavItem as={NavLink} to={pages.oferta.path} bold>
            Oferta
          </NavItem>
          <NavItem as={NavLink} to={pages.kontakt.path} bold>
            Kontakt
          </NavItem>
          <Logo />
        </StyledUlWrapper>,
      ]
    : [
        <StyledUlWrapper>
          <NavItem as={NavLink} to={pages.glowna.path}>
            Strona Główna
          </NavItem>
          <NavItem as={NavLink} to={pages.oNas.path}>
            O Nas
          </NavItem>
          <NavItem as={NavLink} to={pages.zalety.path}>
            Zalety
          </NavItem>
          <NavItem as={NavLink} to={pages.oferta.path}>
            Oferta
          </NavItem>
          <NavItem as={NavLink} to={pages.kontakt.path}>
            Kontakt
          </NavItem>
        </StyledUlWrapper>,
      ];

  const footerNav = [
    <StyledUlWrapper vertical>
      <StyledNavItem as={NavLink} to={pages.glowna.path}>
        Strona Główna
      </StyledNavItem>
      <StyledNavItem as={NavLink} to={pages.oNas.path}>
        O Nas
      </StyledNavItem>
      <StyledNavItem as={NavLink} to={pages.zalety.path}>
        Zalety
      </StyledNavItem>
      <StyledNavItem as={NavLink} to={pages.oferta.path}>
        Oferta
      </StyledNavItem>
      <StyledNavItem as={NavLink} to={pages.kontakt.path}>
        Kontakt
      </StyledNavItem>
    </StyledUlWrapper>,
  ];

  return <>{vertical ? footerNav : navigationView}</>;
};

export default Nav;
