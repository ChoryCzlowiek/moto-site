import React from "react";
import AboutUsWrapper from "../components/organisms/AboutUsWrapper";
import { pages } from "../const/pages";

import PageTemplate from "./PageTemplate";

const AboutUsTemplate = () => (
  <PageTemplate location={pages.aboutUs.location}>
    <AboutUsWrapper />
  </PageTemplate>
);

export default AboutUsTemplate;
