import React from "react";
import styled from "styled-components";
import { pages } from "../../const/pages";
import header from "../../assets/images/header.jpg";
import Title from "../atoms/Title";
import Navbar from "../molecules/Navbar";

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
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const TextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 1rem;
`;

const Header = ({ location }) => (
  <StyledWrapper>
    <Navbar />
    <TextWrapper>
      <StyledTitle>{pages[location].headerTitle}</StyledTitle>
      <Title small yellow>
        {pages[location].headerSubtitle}
      </Title>
    </TextWrapper>
  </StyledWrapper>
);

export default Header;
