import React from "react";
import ReactDOM from "react-dom";

import "utils/chromeMock";
import App from "components/App";
import { ThemeProvider } from "@material-ui/styles";

import "styles/main.scss";
import material from "styles/material";

ReactDOM.render(
  <ThemeProvider theme={material}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
