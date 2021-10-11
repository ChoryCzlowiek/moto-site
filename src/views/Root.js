import React from "react";
import { HashRouter } from "react-router-dom";
import { Router } from "../routes/Router";
import MainTemplate from "../templates/MainTemplate";

const Root = () => (
  <HashRouter>
    <MainTemplate>
      <Router />
    </MainTemplate>
  </HashRouter>
);

export default Root;
