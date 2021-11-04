import React from "react";
import { Switch, Route } from "react-router-dom";
import { pages } from "../const/pages";
import Home from "../views/Home";
import AboutUs from "../views/AboutUs";
import Contact from "../views/Contact";
import Benefits from "../views/Benefits";
import Offer from "../views/Offer";
import OfferDetails from "../views/OfferDetails";

export const Router = () => (
  <Switch>
    <Route exact path={pages.glowna.path} component={Home} />
    <Route path={pages.oNas.path} component={AboutUs} />
    <Route exact path={pages.oferta.path} component={Offer} />
    <Route path={pages.zalety.path} component={Benefits} />
    <Route path={pages.kontakt.path} component={Contact} />
    <Route path={pages.ofertaDetale.path} component={OfferDetails} />
  </Switch>
);
