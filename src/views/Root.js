import React from "react";
import { HashRouter } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Router } from "../routes/Router";
import MainTemplate from "../templates/MainTemplate";

const Root = () => (
  <HashRouter>
    <MainTemplate>
      <Router />
    </MainTemplate>
    <MessengerCustomerChat
      pageId={process.env.FACEBOOK_PAGE_ID}
      appId={process.env.FACEBOOK_APP_ID}
    />
  </HashRouter>
);

export default Root;
