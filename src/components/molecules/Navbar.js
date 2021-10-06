import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.blackOpc};
  position: relative;
  padding: 1.5rem 3rem;
`;

const Navbar = () => (
  <StyledWrapper>
    <div></div>
    <Nav />
  </StyledWrapper>
);

export default Navbar;
