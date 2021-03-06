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
        <SectionWithTitle title="Nasza wsp????praca">
          <StyledWrapper home img={img}>
            <StyledTextWrapper home>
              <StyledTitle orange>Zapraszmy do wsp????pracy</StyledTitle>
              <Paragraph white>
                Do????czenie do sieci OneSerwis wi????e si?? tak??e z nieod????czn??, profesjonaln?? pomoc??
                w prowadzeniu warsztaty z naszej strony. Chcemy, aby ka??dy warsztat b??d??cy w OneSerwis
                mia?? zapewnione profesjonalne wsparcie w ka??dej sferze prowadzenia dzia??alno??ci.
                Wszystkie korzy??ci oraz opcje finansowe do????czenia do OneSerwis znajdziecie pod tym
                linkiem. Wybierz sw??j pakiet ju?? dzi?? i do????cz do OneSerwis.
              </Paragraph>
              <StyledButton onClick={redirectToContact}>
                Napisz do nas
              </StyledButton>
            </StyledTextWrapper>
          </StyledWrapper>
        </SectionWithTitle>,
      ]
    : [
        <SectionWithTitle title="Nasza wsp????praca">
          <StyledWrapper img={img}>
            <StyledTextWrapper>
              <StyledTitle orange>Partner ADAC Polska</StyledTitle>
              <Paragraph white>
                Mo??emy pochwali?? si?? wsp????prac?? z ADAC Polska ??? globaln?? mark?? na rynku
                motoryzacyjnym, kt??r?? zna ka??dy fan motoryzacji. ADAC Polska to
                niemiecki klub samochodowy z ponad 17 milionami cz??onk??w, w tym
                ponad 1,5 miliona motocyklist??w. To sprawia, ??e jest to
                najwi??ksze stowarzyszenie motocyklowe i drugi co do wielko??ci
                klub automobilowy na ??wiecie po ameryka??skim AAA. Posiada 18
                oddzia????w regionalnych w Niemczech.
              </Paragraph>
            </StyledTextWrapper>
            <StyledTextWrapper right>
              <StyledTitle orange>Do????cz do nas</StyledTitle>
              <Paragraph white>
                Ka??dy warsztat zainteresowany wsp????prac?? mo??e do????czy?? do sieci
                OneSerwis i szczyci?? si?? ponadczasowymi rozwi??zaniami, kt??re
                przyci??gn?? nowych klient??w i zagwarantuj?? najwy??sz?? jako????
                obs??ugi.
              </Paragraph>
            </StyledTextWrapper>
          </StyledWrapper>
        </SectionWithTitle>,
      ];

  return <>{colabView}</>;
};

export default Colaboration;
