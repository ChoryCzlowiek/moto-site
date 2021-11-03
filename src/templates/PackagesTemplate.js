import React from "react";
import { pages } from "../const/pages";
import PageTemplate from "./PageTemplate";
import PackagesWrapper from "../components/organisms/PackagesWrapper";

const PackagesTemplate = () => (
  <PageTemplate location={pages.packages.location}>
    <PackagesWrapper />
  </PageTemplate>
);

export default PackagesTemplate;
