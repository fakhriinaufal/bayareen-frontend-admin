import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/apolloClient";
import { Provider } from "react-redux";
import store from "./store/index";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </CookiesProvider>,
  document.getElementById("root")
);
