import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
//Redux
import { Provider } from "react-redux";
import store from "./redux/stores";

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);