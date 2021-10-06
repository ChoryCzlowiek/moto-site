import React from "react";
import { pages } from "../const/pages";
import PageTemplate from "./PageTemplate";

const HomeTemplate = () => (
  <PageTemplate location={pages.home.location}></PageTemplate>
);

export default HomeTemplate;
