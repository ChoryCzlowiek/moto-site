import React from "react";
import ContactWrapper from "../components/organisms/ContectWrapper";
import { pages } from "../const/pages";
import PageTemplate from "./PageTemplate";

const ContactTemplate = () => (
  <PageTemplate location={pages.contact.location}>
    <ContactWrapper />
  </PageTemplate>
);

export default ContactTemplate;
