import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MyBooleanProvider } from "./context";
import './styles/global.css';
import "./styles/media.css";
import { Provider } from "react-redux";
import store from './context/store'
const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
    <MyBooleanProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyBooleanProvider>
    </Provider>
);
