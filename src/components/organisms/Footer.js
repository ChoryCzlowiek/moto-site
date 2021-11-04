import React from "react";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import ContactData from "../molecules/ContactData";
import Nav from "../molecules/Nav";
import footer from "../../assets/images/footer.jpg";
import { useHistory } from "react-router";

const StyledWrapper = styled.div`
  padding: 3rem 0;
  background-image: url(${footer});
  background-size: cover;
  background-position: 50% 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
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
`;

const StyledNav = styled(Nav)`
  margin: 2rem 0 0;
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
      <ContactData footer />
      <BreakLine />
    </StyledWrapper>
  );
};

export default Footer;
