import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "../atoms/Logo";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.whiteOpc};
  position: relative;
  padding: 1.5rem 10rem;
`;

const Navbar = () => (
  <StyledWrapper>
    <Logo />
    <Nav />
  </StyledWrapper>
);

export default Navbar;
