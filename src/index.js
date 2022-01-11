import React from "react";
import ReactDOM from "react-dom";
import Root from "./views/Root";
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
