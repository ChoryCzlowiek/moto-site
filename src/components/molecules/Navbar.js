import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "../atoms/Logo";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.whiteOpc};
  position: relative;
  padding: 1.5rem 10rem;
  border-bottom: 3px solid ${({ theme }) => theme.black};
`;

const Navbar = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <StyledWrapper>
      <Logo
        onClick={() => {
          redirectToHome();
        }}
      />
      <Nav />
    </StyledWrapper>
  );
};

export default Navbar;
