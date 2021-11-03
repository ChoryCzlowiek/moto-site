import React from "react";
import styled from "styled-components";
import aboutUsImg from "../../assets/images/onas.jpg";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import SectionWithTitle from "../molecules/SectionWithTitle";

const StyledWrapper = styled.div`
  display: flex;
  margin: 3rem 0;
  min-height: 70vh;
`;

const StyledTextWrapper = styled.div`
  flex-basis: 40%;
  padding: 3rem;
`;

const StyledImgWrapper = styled.div`
  flex-grow: 1;
  background-image: url(${aboutUsImg});
  background-size: cover;
  background-position: center;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
`;

const AboutUsWrapper = () => (
  <SectionWithTitle title="Poznajmy się lepiej">
    <StyledWrapper>
      <StyledTextWrapper>
        <StyledTitle orange>Kim jestesmy?</StyledTitle>
        <Paragraph big>
          OneSerwis to ugruntowana pozycja na rynku motoryzacjnym, która otwiera
          nowy etap w swojej działalności. To sieć warsztatów, która daje
          ogromne możliwości warsztatom i ich klientom. To działalność, która
          może diametralnie odmienić postrzeganie warsztatów przez klientów.
          Oszczędzaj pieniądze, zdobywaj reputację, zwiększaj wiarygodność, a
          przede wszystkim pozyskuj nowych klientów, którzy wracają i polecają
          ten serwis samochodowy, w którymo doznali coś, o co trudno w naszym
          kraju. Łatwo i szybko wykryj wady samochodu, wyślij wideo na e-mail
          klienta i zamów samochód do naprawy.
        </Paragraph>
      </StyledTextWrapper>
      <StyledImgWrapper />
    </StyledWrapper>
  </SectionWithTitle>
);

export default AboutUsWrapper;
