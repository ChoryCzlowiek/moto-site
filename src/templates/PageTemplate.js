import React from "react";
import PropTypes from "prop-types";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

const PageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

PageTemplate.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
