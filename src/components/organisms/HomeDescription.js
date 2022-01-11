import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import footer from "../../assets/images/footer.jpg";
import Button from "../atoms/Button";
import { useHistory } from "react-router";
import { pages } from "../../const/pages";

const StyledTitlesWrapper = styled.div`
  width: 100vw;
  margin: 5rem 0 0;
  padding: 5rem 15rem;
  background-image: url(${footer});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0 0 3rem;
`;

const HomeDescription = () => {
  const history = useHistory();

  const redirectToAboutUs = () => {
    const path = pages.oNas.path;
    history.push(path);
  };

  return (
    <StyledTitlesWrapper>
      <StyledTitle small orange>
        OneSerwis dzięki swojej wiarygodności i szerokiej ofercie ma możliwość
        współpracować z największymi markami z rynku motoryzacyjnego na świecie
        jak ADAC Polska.
      </StyledTitle>
      <StyledTitle small orange>
        Sieć warsztatów OneSerwis oferuje swoim użytkownikom niepowtarzalne
        możliwości zwiększenia renomy warsztatu oraz skuteczności i szybkości
        napraw.
      </StyledTitle>
      <Button onClick={redirectToAboutUs}>Czytaj więcej...</Button>
    </StyledTitlesWrapper>
  );
};

export default HomeDescription;
