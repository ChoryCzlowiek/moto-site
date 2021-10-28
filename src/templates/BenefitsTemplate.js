import React from "react";
import BenefitsWrapper from "../components/organisms/BenefitsWrapper";
import { pages } from "../const/pages";

import PageTemplate from "./PageTemplate";

const BenefitsTemplate = () => (
  <PageTemplate location={pages.benefits.location}>
    <BenefitsWrapper />
  </PageTemplate>
);

export default BenefitsTemplate;
