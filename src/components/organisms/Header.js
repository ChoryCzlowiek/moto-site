import React from "react";
import styled from "styled-components";
import { pages } from "../../const/pages";
import header from "../../assets/images/header1.jpeg";
import Title from "../atoms/Title";
import Navbar from "../molecules/Navbar";
import Logo from "../atoms/Logo";

const StyledWrapper = styled.div`
  background-image: url(${header});
  background-size: cover;
  background-position: center;
  height: 45vh;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  margin: 1rem 0;
`;

const Header = ({ location }) => (
  <>
    <Navbar />
    <StyledWrapper>
      <TextWrapper>
        <Title>{pages[location].headerTitle}</Title>
        <StyledLogo />
        <Title small orange>
          {pages[location].headerSubtitle}
        </Title>
      </TextWrapper>
    </StyledWrapper>
  </>
);

export default Header;
