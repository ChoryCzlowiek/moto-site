import React from "react";
import AboutUsWrapper from "../components/organisms/AboutUsWrapper";
import Colaboration from "../components/organisms/Colaboration";
import PhotoWrapper from "../components/organisms/PhotoWrapper";
import FeaturesBlock from "../components/organisms/FeaturesBlock";
import PageTemplate from "./PageTemplate";
import colabImg from "../assets/images/aboutColab.png";
import wrapperImg from "../assets/images/AdobeStock_341430772.jpeg";
import slidePhoto3 from "../assets/images/AdobeStock_460799400_resize.jpg";
import JoinUsBlock from "../components/organisms/JoinUsBlock";

const AboutUsTemplate = () => (
  <PageTemplate>
    <AboutUsWrapper />
    <JoinUsBlock
      slide3
      header="Rzeczoznawca ADAC"
      content="Partnerzy One Serwis otrzymują rzeczoznawcę certyfikowanego przez ADAC i ARC."
      photo={slidePhoto3}
    />
    <Colaboration img={colabImg} />
    {/* <PhotoWrapper img={wrapperImg} /> */}
  </PageTemplate>
);

export default AboutUsTemplate;
