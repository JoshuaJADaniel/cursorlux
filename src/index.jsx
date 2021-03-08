import React from "react";
import ReactDOM from "react-dom";

import reducers from "reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "utils/chromeMock";
import App from "components/App";
import { ThemeProvider } from "@material-ui/styles";

import "styles/main.scss";
import material from "styles/material";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={material}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
