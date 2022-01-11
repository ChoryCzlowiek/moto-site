import React from "react";
import styled, { css } from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";
import { pages } from "../../const/pages";

const StyledWrapper = styled.div`
  min-height: ${({ home }) => (home ? "100vh": "auto")};
  background: url(${({ home, img }) => (home ? img : "")});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: ${({ home }) => (home ? "0" : "3rem 0")};
  display: flex;
  gap: 7vh;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ home }) => (home ? "rgba(0, 0, 0, 0.4)" : "")};
  }
`;

const StyledTextWrapper = styled.div`
  position: ${({ home }) => (home ? "absolute" : "unset")};
  top: ${({ home }) => (home ? "90%" : "unset")};
  left: ${({ right }) => (right ? "55vw" : "unset")};
  transform: ${({ home }) => (home ? "translateY(0%)" : "unset")};
  width: 30vw;
  height: auto;
  min-height: 30vw;
  background-color: ${({ theme }) => theme.blackOpc};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  z-index: 2;

  @media (max-width: 768px) {
    transform: unset;
    position: relative;
    width: 100%;
    height: 100%;
    top: unset;
    left: unset;
    right: unset;
  }

  ${({ home }) =>
    home &&
    css`
      justify-content: center;
      top: 30%;
      left: 5vw;
      width: 50vw;
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        left: unset;
        top: unset;
        position: relative;
      }
    `}
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 0;
`;

const Colaboration = ({ home, img }) => {
  const history = useHistory();

  const redirectToContact = () => {
    const path = pages.kontakt.path;
    history.push(path);
  };

  const colabView = home
    ? [
        <SectionWithTitle title="Nasza współpraca">
          <StyledWrapper home img={img}>
            <StyledTextWrapper home>
              <StyledTitle orange>Zapraszmy do współpracy</StyledTitle>
              <Paragraph white>
                Dołączenie do sieci OneSerwis wiąże się także z nieodłączną, profesjonalną pomocą
                w prowadzeniu warsztaty z naszej strony. Chcemy, aby każdy warsztat będący w OneSerwis
                miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia działalności.
                Wszystkie korzyści oraz opcje finansowe dołączenia do OneSerwis znajdziecie pod tym
                linkiem. Wybierz swój pakiet już dziś i dołącz do OneSerwis.
              </Paragraph>
              <StyledButton onClick={redirectToContact}>
                Napisz do nas
              </StyledButton>
            </StyledTextWrapper>
          </StyledWrapper>
        </SectionWithTitle>,
      ]
    : [
        <SectionWithTitle title="Nasza współpraca">
          <StyledWrapper img={img}>
            <StyledTextWrapper>
              <StyledTitle orange>Partner ADAC Polska</StyledTitle>
              <Paragraph white>
                Możemy pochwalić się współpracą z ADAC Polska – globalną marką na rynku
                motoryzacyjnym, którą zna każdy fan motoryzacji. ADAC Polska to
                niemiecki klub samochodowy z ponad 17 milionami członków, w tym
                ponad 1,5 miliona motocyklistów. To sprawia, że jest to
                największe stowarzyszenie motocyklowe i drugi co do wielkości
                klub automobilowy na świecie po amerykańskim AAA. Posiada 18
                oddziałów regionalnych w Niemczech.
              </Paragraph>
            </StyledTextWrapper>
            <StyledTextWrapper right>
              <StyledTitle orange>Dołącz do nas</StyledTitle>
              <Paragraph white>
                Każdy warsztat zainteresowany współpracą może dołączyć do sieci
                OneSerwis i szczycić się ponadczasowymi rozwiązaniami, które
                przyciągną nowych klientów i zagwarantują najwyższą jakość
                obsługi.
              </Paragraph>
            </StyledTextWrapper>
          </StyledWrapper>
        </SectionWithTitle>,
      ];

  return <>{colabView}</>;
};

export default Colaboration;
