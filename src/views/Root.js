import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../routes/Router";
import MainTemplate from "../templates/MainTemplate";

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Router />
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
