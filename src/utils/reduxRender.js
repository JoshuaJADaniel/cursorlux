import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

const store = createStore(reducers);

const reduxRender = (component) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default reduxRender;
