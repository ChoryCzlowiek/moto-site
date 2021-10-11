import React from "react";
import { pages } from "../const/pages";
import Slider from "../components/organisms/Slider";

const HomeTemplate = () => (
  <>
    <Slider location={pages.home.location} />
  </>
);

export default HomeTemplate;
