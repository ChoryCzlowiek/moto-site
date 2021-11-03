import React from "react";
import styled from "styled-components";
import { pages } from "../../const/pages";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import Title from "../atoms/Title";
import Border from "../molecules/BorderBox";
import Nav from "../molecules/Nav";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: changingSlider 15s linear infinite both;
  filter: grayscale(0.5);

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

const StyledImg2 = styled(StyledImg)`
  animation-delay: 5s;
`;

const StyledImg3 = styled(StyledImg)`
  animation-delay: 10s;
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
  animation: changingSlider 15s linear infinite both;

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

const StyledImgWrapper2 = styled(StyledImgWrapper)`
  animation-delay: 5s;
`;

const StyledImgWrapper3 = styled(StyledImgWrapper)`
  animation-delay: 10s;
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
    <StyledImgWrapper img={slider1}></StyledImgWrapper>
    <StyledImgWrapper2 img={slider2}></StyledImgWrapper2>
    <StyledImgWrapper3 img={slider3}></StyledImgWrapper3>
    {/* <StyledImg src={slider1} /> */}
    {/* <StyledImg2 src={slider2} /> */}
    {/* <StyledImg3 src={slider3} /> */}
    <StyledTextWrapper>
      <StyledTitle>{pages[location].headerTitle}</StyledTitle>
      <Title small orange>
        {pages[location].headerSubtitle}
      </Title>
    </StyledTextWrapper>
    <Border>
      <Nav home />
    </Border>
  </StyledWrapper>
);

export default Slider;
