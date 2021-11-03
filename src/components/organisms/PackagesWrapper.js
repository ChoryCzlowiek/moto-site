import React from "react";
import PackageBox from "../molecules/PackageBox";
import SectionWithTitle from "../molecules/SectionWithTitle";
import img from "../../assets/images/slider1.jpg";

const PackagesWrapper = () => (
  <SectionWithTitle title="Sprawdz jakie swiadczymy uslugi">
    <PackageBox img={img} />
    <PackageBox reverseOrder img={img} />
    <PackageBox img={img} />
    <PackageBox reverseOrder img={img} />
  </SectionWithTitle>
);

export default PackagesWrapper;
