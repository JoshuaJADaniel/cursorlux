import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";
import reportWebVitals from "reportWebVitals";
import { ThemeProvider } from "@material-ui/styles";

import "styles/main.scss";
import material from "styles/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={material}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
