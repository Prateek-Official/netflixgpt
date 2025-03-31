import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <Body />
  </Provider>
);
