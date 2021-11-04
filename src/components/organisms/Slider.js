import React from "react";
import styled from "styled-components";
import { pages } from "../../const/pages";
import slider from "../../assets/images/slider.jpg";
import Title from "../atoms/Title";
import Border from "../molecules/BorderBox";
import Nav from "../molecules/Nav";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @keyframes changingSlider {
    0% {
      opacity: 0;
    }

    3%,
    33% {
      opacity: 1;
    }

    36% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 1rem;
`;

const Slider = ({ location }) => (
  <StyledWrapper>
    <StyledImgWrapper img={slider}></StyledImgWrapper>
    <StyledTextWrapper>
      <StyledTitle orange>{pages[location].sliderTitle}</StyledTitle>
      <Title small orange>
        {pages[location].sliderSubtitle}
      </Title>
    </StyledTextWrapper>
    <Border>
      <Nav home />
    </Border>
  </StyledWrapper>
);

export default Slider;
