import React from "react";
import OfferDetailsWrapper from "../components/organisms/OfferDetailsWrapper";
import PageTemplate from "../templates/PageTemplate";

const OfferDetailsTemplate = ({ name }) => (
  <PageTemplate>
    <OfferDetailsWrapper name={name} />
  </PageTemplate>
);

export default OfferDetailsTemplate;
