import React from "react";
import { pages } from "../const/pages";
import styled from 'styled-components';
import Slider from "../components/organisms/Slider";
import Footer from "../components/organisms/Footer";
import featuresPhoto1 from "../assets/images/AdobeStock_308327283_resize.jpg";
import featuresPhoto2 from "../assets/images/AdobeStock_69826947.jpeg";
import featuresPhoto3 from "../assets/images/AdobeStock_161167457_resiaze.jpg";
import slidePhoto1 from "../assets/images/IMG_8697-1_resize.png";
import slidePhoto2 from "../assets/images/service-motor-vehicle-1280x720-1280x720.jpg";
import slidePhoto3 from "../assets/images/AdobeStock_460799400_resize.jpg";
import FeaturesBlock from "../components/organisms/FeaturesBlock";
import icon from "../assets/images/3659904.png";
import JoinUsBlock from "../components/organisms/JoinUsBlock";

const HomeTemplate = () => (
  <>
    <Slider location={pages.glowna.location} />
    <Spacer />
    <FeaturesBlock
      position="left"
      image={featuresPhoto1}
      title={`Tekst alternatywny`}
      header="Dołączenie do OneSerwis"
      about="Dołączenie do OneSerwis wiąże się z nieodłączną, profesjonalną pomocą w prowadzeniu warsztaty z naszej strony. Chcemy, aby każdy warsztat będący w OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia działalności. Dzięki&nbsp;swojej wiarygodności i szerokiej ofercie ma możliwość współpracować z największymi markami z rynku motoryzacyjnego na świecie. 
      "
      link=""
      // button="Zobacz więcej"
    />
    <FeaturesBlock
      position="right"
      image={featuresPhoto2}
      title={`Tekst alternatywny`}
      header="Sieć warsztatów partnerskich"
      about="W OneSerwis każdemu warsztatowi oferujemy konsultację prawną z działem prawnym w punkcie obsługi lub siedzibie firmy. Liczba konsultacji zależy od wykupionego pakietu. Istnieje możliwość prowadzenia spraw sądowych oraz obsługi notarialnej na terenie naszego kraju.
      Usługa rzeczoznawcy z kolei pozwala na  konsultacje w procesie likwidacji szkód, bezpłatne konsultacje i pomoc u dedykowanego młodszego rzeczoznawcy przypisanego do danego warsztatu
      "
      link=""
      // button="Zobacz więcej"
    />
    <FeaturesBlock
      position="center"
      image={featuresPhoto3}
      title={`Tekst alternatywny`}
      header="Zapraszmy do współpracy"
      about="Dołączenie do OneSerwis wiąże się z nieodłączną, profesjonalną pomocą w prowadzeniu warsztaty z naszej strony. Chcemy, aby każdy warsztat będący w OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia działalności. Dzięki swojej wiarygodności i szerokiej ofercie ma możliwość współpracować z największymi markami z rynku motoryzacyjnego na świecie. "
      icon1={icon}
      content1Header="Usługa rzeczoznawcy"
      content1Content="Pozwala na  konsultacje w procesie likwidacji szkód i pomoc u certyfikowanego  rzeczoznawcy ADAC Polska przypisanego do danego warsztatu.      "
      icon2={icon}
      content2Header="Expert na etacie"
      content2Content="Expert na etacie to pomoc w zakresie sporządzenie opinii technicznej przez biegłego rzeczoznawce oraz ciągły nadzór nad jakością prowadzonych prac warsztatowych. Dodatkowo expert na etacie pomoże w mediacjach w sporach technicznych z klientami.
      "
      icon3={icon}
      content3Header="Ochrona Prawna"
      content3Content="Konsultacje prawne z działem prawnym (Doradcą prawnym, Radcą Prawnym, Adwokatem w punkcie obsługi, online, w siedzibie firmy)."
      icon4={icon}
      content4Header="Szkolenia"
      content4Content="Szkolenia stacjonarne organizowane przez ADAC Europe, online organizowane przez ADAC Europe, zniżki na szkolenia oragnizowane przez ADAC Polska."
    />
    {/* <HomeDescription /> */}
    <JoinUsBlock
      slide1
      header="Partner ADAC Polska i ARC"
      content="Dołączenie do OneSerwis wiąże się także z nieodłączną profesjonalną pomocą w prowadzeniu warsztatu z naszej strony. Chcemy, aby każdy warsztat 
      wywodzący się spod szyldu OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia serwisu."
      photo={slidePhoto1}
    />
    <JoinUsBlock
      slide2
      header="One Serwis"
      content="Dołączenie do OneSerwis wiąże się także z nieodłączną profesjonalną pomocą w prowadzeniu warsztatu z naszej strony. Chcemy, aby każdy warsztat 
      wywodzący się spod szyldu OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia serwisu."
      photo={slidePhoto2}
    />
    <JoinUsBlock
      slide3
      header="Rzeczoznawca ADAC Polska"
      content="Partnerzy One Serwis otrzymują rzeczoznawcę certyfikowanego przez ADAC Polska i ARC."
      photo={slidePhoto3}
    />
    <Footer />
  </>
);

export default HomeTemplate;

const Spacer = styled.div`
  width: 100%;
  height: 5px;
`;