import React from "react";
import PropTypes from "prop-types";
import Header from "../components/organisms/Header";

const PageTemplate = ({ children, location }) => (
  <>
    <Header location={location} />
    {children}
  </>
);

PageTemplate.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
