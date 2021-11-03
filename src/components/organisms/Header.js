import React from "react";
import styled from "styled-components";
import { pages } from "../../const/pages";
// import header from "../../assets/images/header1.jpeg";
import Title from "../atoms/Title";
import Navbar from "../molecules/Navbar";
import Logo from "../atoms/Logo";

const Header = ({ location }) => (
  <>
    <Navbar />
    {/* <StyledWrapper>
      <TextWrapper>
        <Title>{pages[location].headerTitle}</Title>
        <StyledLogo />
        <Title small orange>
          {pages[location].headerSubtitle}
        </Title>
      </TextWrapper>
    </StyledWrapper> */}
  </>
);

export default Header;
