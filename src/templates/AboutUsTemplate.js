import React from "react";
import AboutUsWrapper from "../components/organisms/AboutUsWrapper";
import Colaboration from "../components/organisms/Colaboration";
import PageTemplate from "./PageTemplate";
import colabImg from "../assets/images/aboutColab.png";

const AboutUsTemplate = () => (
  <PageTemplate>
    <AboutUsWrapper />
    <Colaboration img={colabImg} />
  </PageTemplate>
);

export default AboutUsTemplate;
