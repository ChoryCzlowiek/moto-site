import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../../assets/images/logo.png";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.whiteOpc};
  position: relative;
  padding: 1.5rem 10rem;
`;

const StyledImg = styled.img`
  height: 2rem;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledImg src={logo} />
    <Nav />
  </StyledWrapper>
);

export default Navbar;
