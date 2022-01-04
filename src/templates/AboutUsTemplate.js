import React from "react";
import AboutUsWrapper from "../components/organisms/AboutUsWrapper";
import Colaboration from "../components/organisms/Colaboration";
import PhotoWrapper from "../components/organisms/PhotoWrapper";
import FeaturesBlock from "../components/organisms/FeaturesBlock";
import PageTemplate from "./PageTemplate";
import colabImg from "../assets/images/aboutColab.png";
import wrapperImg from "../assets/images/AdobeStock_341430772.jpeg";

const AboutUsTemplate = () => (
  <PageTemplate>
    <AboutUsWrapper />
    <Colaboration img={colabImg} />
    <PhotoWrapper img={wrapperImg} />
  </PageTemplate>
);

export default AboutUsTemplate;
