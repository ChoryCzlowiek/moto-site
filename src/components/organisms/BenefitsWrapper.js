import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import BenefitsBox from "../molecules/BenefitsBox";
import FeaturesBlock from "../organisms/FeaturesBlock";
import { pages } from "../../const/pages";
import clipImg from "../../assets/images/clipBoxImg.jpg";
import clipImg2 from "../../assets/images/clipBoxImg2.jpeg";
import featuresPhoto1 from "../../assets/images/AdobeStock_161167457_resiaze.jpg";
import featuresPhoto2 from "../../assets/images/AdobeStock_77452038_resiaze.jpg";
import featuresPhoto3 from "../../assets/images/Depositphotos_139208182_xl-2015.jpg";
import featuresPhoto4 from "../../assets/images/AdobeStock_83501289.jpeg";

const StyledBenefitsWrapper = styled.div`
  margin: 4rem 0;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". first"
    "second first"
    "second third"
    "fourth third"
    "fourth .";
  gap: 5rem 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const StyledClipImg = styled.div`
  min-height: 60vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: ${({ down }) => (down ? "50% 50%" : "50% 80%")};
  clip-path: ${({ down }) =>
    down
      ? "polygon(0 37%, 50% 0, 100% 37%, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0, 100% 63%, 50% 100%, 0 63%)"};
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const SpacerPhoto = styled.div`
  width: 100%;
  height: 6rem;
`;

const BenefitsWrapper = () => {
  let counter = 0;

  return (
    <SectionWithTitle title="Co oferuje OneSerwis, jako sieć warsztatów – niezawodne funkcje">
      <StyledClipImg img={clipImg}/>
        <FeaturesBlock
          position="right"
          image={featuresPhoto1}
          title={`Tekst alternatywny`}
          header="Dołączenie do OneSerwis"
          about="Dołączenie do OneSerwis wiąże się z nieodłączną, profesjonalną pomocą w prowadzeniu warsztaty z naszej strony. Chcemy, aby każdy warsztat będący w OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia działalności. Dzięki&nbsp;swojej wiarygodności i szerokiej ofercie ma możliwość współpracować z największymi markami z rynku motoryzacyjnego na świecie. 
          "
        />
        <SpacerPhoto />
        <FeaturesBlock
          position="left"
          image={featuresPhoto2}
          title={`Tekst alternatywny`}
          header="Warsztaty partnerskie"
          about="W OneSerwis każdemu warsztatowi oferujemy konsultację prawną z działem prawnym w punkcie obsługi lub siedzibie firmy. Liczba konsultacji zależy od wykupionego pakietu. Istnieje możliwość prowadzenia spraw sądowych oraz obsługi notarialnej na terenie naszego kraju.
          Usługa rzeczoznawcy z kolei pozwala na  konsultacje w procesie likwidacji szkód, bezpłatne konsultacje i pomoc u dedykowanego młodszego rzeczoznawcy przypisanego do danego warsztatu
          "
        />
        <SpacerPhoto />
        <FeaturesBlock
          position="right"
          image={featuresPhoto3}
          title={`Tekst alternatywny`}
          header="Dołączenie do OneSerwis"
          about="Dołączenie do OneSerwis wiąże się z nieodłączną, profesjonalną pomocą w prowadzeniu warsztaty z naszej strony. Chcemy, aby każdy warsztat będący w OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia działalności. Dzięki&nbsp;swojej wiarygodności i szerokiej ofercie ma możliwość współpracować z największymi markami z rynku motoryzacyjnego na świecie. 
          "
        />
        <SpacerPhoto />
        <FeaturesBlock
          position="left"
          image={featuresPhoto4}
          title={`Tekst alternatywny`}
          header="Warsztaty partnerskie"
          about="W OneSerwis każdemu warsztatowi oferujemy konsultację prawną z działem prawnym w punkcie obsługi lub siedzibie firmy. Liczba konsultacji zależy od wykupionego pakietu. Istnieje możliwość prowadzenia spraw sądowych oraz obsługi notarialnej na terenie naszego kraju.
          Usługa rzeczoznawcy z kolei pozwala na  konsultacje w procesie likwidacji szkód, bezpłatne konsultacje i pomoc u dedykowanego młodszego rzeczoznawcy przypisanego do danego warsztatu
          "
        />
      {/* <StyledBenefitsWrapper>
        {pages.zalety.items.map((item) => {
          counter++;
          return (
            <BenefitsBox
              text={item.text}
              title={item.title}
              gridArea={item.gridArea}
              counter={counter}
            />
          );
        })}
      </StyledBenefitsWrapper> */}
      <StyledClipImg down img={clipImg2} />
    </SectionWithTitle>
  );
};

export default BenefitsWrapper;
