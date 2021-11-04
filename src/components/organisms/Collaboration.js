import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import colabImg from "../../assets/images/aboutColab.png";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

const StyledWrapper = styled.div`
  min-height: 60vh;
  background-image: url(${colabImg});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 0 0 15vw;

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
  justify-content: center;
  align-content: center;
  padding: 3rem;
  z-index: 2;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
`;

const Collaboration = () => (
  <SectionWithTitle title="Nasza współpraca">
    <StyledWrapper>
      <StyledTextWrapper>
        <StyledTitle orange>Partner ADAC</StyledTitle>
        <Paragraph white>
          Możemy pochwalić się współpracą z ADAC – globalną marką na rynku
          motoryzacyjnym, którą zna każdy fan motoryzacji. ADAC to niemiecki
          klub samochodowy z ponad 17 milionami członków, w tym ponad 1,5
          miliona motocyklistów. To sprawia, że jest to największe
          stowarzyszenie motocyklowe i drugi co do wielkości klub automobilowy
          na świecie po amerykańskim AAA. Posiada 18 oddziałów regionalnych w
          Niemczech.
        </Paragraph>
      </StyledTextWrapper>
      <StyledTextWrapper right>
        <StyledTitle orange>Dołącz do nas</StyledTitle>
        <Paragraph white>
          Każdy warsztat zainteresowany współpracą może dołączyć do sieci
          OneSerwis i szczycić się ponadczasowymi rozwiązaniami, które
          przyciągną nowych klientów i zagwarantują najwyższą jakość obsługi.
        </Paragraph>
      </StyledTextWrapper>
    </StyledWrapper>
  </SectionWithTitle>
);

export default Collaboration;
