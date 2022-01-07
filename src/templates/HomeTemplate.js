import React from "react";
import { pages } from "../const/pages";
import Slider from "../components/organisms/Slider";
import Footer from "../components/organisms/Footer";
import Colaboration from "../components/organisms/Colaboration";
import homeColab from "../assets/images/homeColab.jpg";
import featuresPhoto1 from "../assets/images/AdobeStock_308327283.jpeg";
import featuresPhoto2 from "../assets/images/AdobeStock_69826947.jpeg";
import featuresPhoto3 from "../assets/images/AdobeStock_161167457.jpeg";
import HomeDescription from "../components/organisms/HomeDescription";
import FeaturesBlock from "../components/organisms/FeaturesBlock";
import icon from "../assets/images/3659904.png";
import JoinUsBlock from "../components/organisms/JoinUsBlock";

const HomeTemplate = () => (
  <>
    <Slider location={pages.glowna.location} />
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
      content1Content="Pozwala na  konsultacje w procesie likwidacji szkód i pomoc u certyfikowanego  rzeczoznawcy ADAC  przypisanego do danego warsztatu.      "
      icon2={icon}
      content2Header="Expert na etacie"
      content2Content="Expert na etacie to pomoc w zakresie sporządzenie opinii technicznej przez biegłego rzeczoznawce oraz ciągły nadzór nad jakością prowadzonych prac warsztatowych. Dodatkowo expert na etacie pomoże w mediacjach w sporach technicznych z klientami.
      "
      icon3={icon}
      content3Header="Ochrona Prawna"
      content3Content="Konsultacje prawne z działem prawnym (Doradcą prawnym, Radcą Prawnym, Adwokatem w punkcie obsługi, online, w siedzibie firmy)."
      icon4={icon}
      content4Header="Szkolenia"
      content4Content="Szkolenia stacjonarne organizowane przez ADAC Europe, online organizowane przez ADAC Europe, zniżki na szkolenia oragnizowane przez ADAC."
    />
    {/* <HomeDescription /> */}
    <JoinUsBlock
      slide1
      header="Partner ADAC i ARC"
      content="Dołączenie do OneSerwis wiąże się także z nieodłączną profesjonalną pomocą w prowadzeniu warsztatu z naszej strony. Chcemy, aby każdy warsztat 
      wywodzący się spod szyldu OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia serwisu."
      photo={featuresPhoto2}
    />
    <JoinUsBlock
      slide2
      header="Partner ADAC i ARC"
      content="Dołączenie do OneSerwis wiąże się także z nieodłączną profesjonalną pomocą w prowadzeniu warsztatu z naszej strony. Chcemy, aby każdy warsztat 
      wywodzący się spod szyldu OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia serwisu."
      photo={featuresPhoto2}
    />
    <JoinUsBlock
      slide3
      header="Partner ADAC i ARC"
      content="Dołączenie do OneSerwis wiąże się także z nieodłączną profesjonalną pomocą w prowadzeniu warsztatu z naszej strony. Chcemy, aby każdy warsztat 
      wywodzący się spod szyldu OneSerwis miał zapewnione profesjonalne wsparcie w każdej sferze prowadzenia serwisu."
      photo={featuresPhoto2}
    />
    <Colaboration home img={homeColab} />
    <Footer />
  </>
);

export default HomeTemplate;
