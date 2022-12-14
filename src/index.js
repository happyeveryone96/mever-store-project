import React from "react";
import ReactDOM from "react-dom/client";
import MeverStore from "./pages/MeverStore/MeverStore";
import reportWebVitals from "./reportWebVitals";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MeverStore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
