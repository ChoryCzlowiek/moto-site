import React from "react";
import OfferBox from "../molecules/OfferBox";
import SectionWithTitle from "../molecules/SectionWithTitle";
import img from "../../assets/images/slider1.jpg";

const OfferWrapper = () => (
  <SectionWithTitle title="Sprawdz jakie swiadczymy uslugi">
    <OfferBox img={img} />
    <OfferBox reverseOrder img={img} />
    <OfferBox img={img} />
    <OfferBox reverseOrder img={img} />
  </SectionWithTitle>
);

export default OfferWrapper;
