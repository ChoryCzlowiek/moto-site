import React from "react";
import OfferDetailsTemplate from "../templates/OfferDetailsTemplate";

const OfferDetails = ({ match }) => (
  <OfferDetailsTemplate name={match.params.name}></OfferDetailsTemplate>
);

export default OfferDetails;
