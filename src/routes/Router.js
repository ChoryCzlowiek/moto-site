import React from "react";
import { Switch, Route } from "react-router-dom";
import { pages } from "../const/pages";
import Home from "../views/Home";
import AboutUs from "../views/AboutUs";
import Contact from "../views/Contact";
import Benefits from "../views/Benefits";
import Packages from "../views/Packages";

export const Router = () => (
  <Switch>
    <Route exact path={pages.home.path} component={Home} />
    <Route path={pages.aboutUs.path} component={AboutUs} />
    <Route path={pages.packages.path} component={Packages} />
    <Route path={pages.benefits.path} component={Benefits} />
    <Route path={pages.contact.path} component={Contact} />
  </Switch>
);
