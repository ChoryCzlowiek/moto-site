import React from "react";
import styled from "styled-components";
import { pages } from "../const/pages";
import Slider from "../components/organisms/Slider";
import Title from "../components/atoms/Title";
import collaborationImg from "../assets/images/wspolpraca.png";
import collaborationImg2 from "../assets/images/wspolpraca2.png";
import Button from "../components/atoms/Button";
import Footer from "../components/organisms/Footer";

const StyledTitlesWrapper = styled.div`
  padding: 3rem 10rem;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 1rem;
`;

const StyledCollaborationImg = styled.div`
  min-height: 100vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const HomeTemplate = () => (
  <>
    <Slider location={pages.glowna.location} />
    <StyledTitlesWrapper>
      <StyledTitle small orange>
        OneSerwis dzięki swojej wiarygodności i szerokiej ofercie ma możliwość
        współpracować z największymi markami z rynku motoryzacyjnego na świecie
        jak ADAC.
      </StyledTitle>
      <Title small orange>
        Sieć warsztatów OneSerwis oferuje swoim użytkownikom niepowtarzalne
        możliwości zwiększenia renomy warsztatu oraz skuteczności i szybkości
        napraw.
      </Title>
    </StyledTitlesWrapper>
    <StyledCollaborationImg img={collaborationImg} />
    <StyledTitlesWrapper>
      <StyledTitle small orange>
        OneSerwis dzięki swojej wiarygodności i szerokiej ofercie ma możliwość
        współpracować z największymi markami z rynku motoryzacyjnego na świecie
        jak ADAC.
      </StyledTitle>
      <Button>Kontakt</Button>
    </StyledTitlesWrapper>
    <StyledCollaborationImg img={collaborationImg2} />
    <Footer />
  </>
);

export default HomeTemplate;
