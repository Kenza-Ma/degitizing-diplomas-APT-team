import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV === "development") {
  import("disable-react-error-overlay").then(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) iframe.remove();
  });
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
