import React from "react";
import { pages } from "../const/pages";
import PageTemplate from "./PageTemplate";
import OfferWrapper from "../components/organisms/OfferWrapper";

const OfferTemplate = () => (
  <PageTemplate location={pages.offer.location}>
    <OfferWrapper />
  </PageTemplate>
);

export default OfferTemplate;
