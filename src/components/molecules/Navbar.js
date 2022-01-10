import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Popup from 'reactjs-popup';
import Nav from "./Nav";
import Logo from "../atoms/Logo";
import BurgerIcon from "../atoms/BurgerIcon";
import Menu from "../atoms/Menu";
import 'reactjs-popup/dist/index.css';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme, home }) => (home ? "none" : theme.whiteOpc)};
  width: 100%;
  z-index: 9999;
  position: ${({ home }) => (home ? "absolute" : "relative")};
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

  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
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
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98)" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>
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
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>
        </StyledWrapper>,
      ];

  return <>{navbarView}</>;
};

export default Navbar;
