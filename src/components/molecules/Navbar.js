import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "../atoms/Logo";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme, home }) => (home ? "none" : theme.whiteOpc)};
  position: relative;
  padding: 1rem 10rem;
  border-bottom: ${({ theme, home }) =>
    home ? "none" : `3px solid ${theme.black}`};
  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center;
  }
`;

const Navbar = ({ home }) => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  const navbarView = home
    ? [
        <StyledWrapper home>
          <Nav />
          <Logo
            onClick={() => {
              redirectToHome();
            }}
          />
        </StyledWrapper>,
      ]
    : [
        <StyledWrapper>
          <Logo
            onClick={() => {
              redirectToHome();
            }}
          />
          <Nav />
        </StyledWrapper>,
      ];

  return <>{navbarView}</>;
};

export default Navbar;
