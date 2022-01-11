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
  pageId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  shouldShowDialog: PropTypes.bool,
  htmlRef: PropTypes.string,
  minimized: PropTypes.bool,
  themeColor: PropTypes.string,
  loggedInGreeting: PropTypes.string,
  loggedOutGreeting: PropTypes.string,
  greetingDialogDisplay: PropTypes.oneOf(['show', 'hide', 'fade']),
  greetingDialogDelay: PropTypes.number,
  autoLogAppEvents: PropTypes.bool,
  xfbml: PropTypes.bool,
  version: PropTypes.string,
  language: PropTypes.string,
  debug: PropTypes.bool,
  onCustomerChatDialogShow: PropTypes.func,
  onCustomerChatDialogHide: PropTypes.func,
};

export default PageTemplate;
