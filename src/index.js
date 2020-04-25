import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";

import store from "./configeru-store";

import "./style.css";
import Header from "./blocks/Header/Header";
import MainContainer from "./blocks/Main/MainContainer";

const App = () => (
  <Provider store={store}>
    <Normalize />
    <Header />
    <MainContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
