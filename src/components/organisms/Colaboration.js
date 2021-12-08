import React from "react";
import styled, { css } from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";
import { pages } from "../../const/pages";

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: ${({ home }) => (home ? "0" : "0 0 15vw")};

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
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: ${({ right }) => (right ? "55vw" : "15vw")};
  transform: translateY(-50%);
  width: 30vw;
  height: 30vw;
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
      top: 40%;
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
                Dołączenie do sieci OneSerwis wiąże się także z nieodłączną,
                profesjonalną pomocą w prowadzeniu warsztatu z naszej strony.
                Chcemy, aby każdy warsztat wywodzący się spod szyldu OneSerwis
                miał zapewnione profesjonalne wsparcie w każdej sferze
                prowadzenia działalności. ……i dołącz do OneSerwis.
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
              <StyledTitle orange>Partner ADAC</StyledTitle>
              <Paragraph white>
                Możemy pochwalić się współpracą z ADAC – globalną marką na rynku
                motoryzacyjnym, którą zna każdy fan motoryzacji. ADAC to
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
