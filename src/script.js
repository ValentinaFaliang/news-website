import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App/App.js";
import "./common.css";

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
