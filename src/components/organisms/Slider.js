import React from "react";
import styled from "styled-components";
import slider from "../../assets/images/wspolpraca.png";
import Navbar from "../molecules/Navbar";
import LayerStyledImgWrapper from "../molecules/LayerStyledImgWrapper";
import logo1 from "../../assets/images/ADAC-Logo.png";
import logo2 from "../../assets/images/ADAC-Logo.png";

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
`;

const Slider = ({ location }) => (
  <StyledWrapper>
    <StyledImgWrapper img={slider}></StyledImgWrapper>
    <Navbar home />
    <LayerStyledImgWrapper
      header="Sieć kompleksowych warsztatów samochodowych"
      brands="Partnerzy"
      logo1={logo1}
      logo2={logo2}
    />
  </StyledWrapper>
);

export default Slider;
