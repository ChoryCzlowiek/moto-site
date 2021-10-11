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

const Nav = ({ home }) => (
  <StyledUlWrapper home>
    {!home && (
      <NavItem as={NavLink} to={pages.home.path}>
        Strona Główna
      </NavItem>
    )}
    <NavItem as={NavLink} to={pages.aboutUs.path}>
      O Nas
    </NavItem>
    <NavItem as={NavLink} to={pages.benefits.path}>
      Zalety
    </NavItem>
    {home && (
      <NavItem title as={NavLink} to={pages.home.path}>
        NAZWA
      </NavItem>
    )}
    <NavItem as={NavLink} to={pages.priceList.path}>
      Cennik
    </NavItem>
    <NavItem as={NavLink} to={pages.contact.path}>
      Kontakt
    </NavItem>
  </StyledUlWrapper>
);

export default Nav;
