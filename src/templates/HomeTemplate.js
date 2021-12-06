import React from "react";
import { pages } from "../const/pages";
import Slider from "../components/organisms/Slider";
import Footer from "../components/organisms/Footer";
import Colaboration from "../components/organisms/Colaboration";
import homeColab from "../assets/images/homeColab.jpg";
import HomeDescription from "../components/organisms/HomeDescription";

const HomeTemplate = () => (
  <>
    <Slider location={pages.glowna.location} />
    <HomeDescription />
    <Colaboration home img={homeColab} />
    <Footer />
  </>
);

export default HomeTemplate;
