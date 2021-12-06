import React from "react";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import ContactData from "../molecules/ContactData";
import Nav from "../molecules/Nav";
import footer from "../../assets/images/footer.jpg";
import { useHistory } from "react-router";
import Title from "../atoms/Title";
import youtube from "../../assets/images/youtube.png";
import facebook from "../../assets/images/facebook.png";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  padding: 1.5rem 5rem;
  background-image: url(${footer});
  background-size: cover;
  background-position: 50% 90%;
  display: flex;
  justify-content: space-evenly;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const StyledNavWrapper = styled.div`
  flex-basis: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledNav = styled(Nav)`
  margin: 2rem 0 0;
`;

const StyledContactWrapper = styled.div`
  flex-basis: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledIconsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled.img`
  margin: 1rem 0;
  height: 2.5rem;
  width: 2.5em;
  cursor: pointer;
`;

const BreakLine = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 3px;
  height: 80%;
  background-color: ${({ theme }) => theme.orange};
  z-index: 2;
`;

const Footer = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <StyledWrapper>
      <StyledNavWrapper>
        <Logo onClick={redirectToHome} />
        <StyledNav vertical />
      </StyledNavWrapper>
      <StyledContactWrapper>
        <StyledIconsBox>
          <a href="https://www.youtube.com/channel/UCEaP2hfwDAzGSS9vON4h3og">
            <StyledIcon src={youtube} />
          </a>
          <a href="https://www.facebook.com/OneSerwis-102882895544229">
            <StyledIcon src={facebook} />
          </a>
        </StyledIconsBox>
        <ContactData footer />
      </StyledContactWrapper>
      <BreakLine />
    </StyledWrapper>
  );
};

export default Footer;
