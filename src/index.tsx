import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";

const container = document.querySelector("#root");

ReactDom.render(<App />, container);
