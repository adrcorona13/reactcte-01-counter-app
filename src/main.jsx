import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import './styles.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp></HelloWorldApp>
    <FirstApp title="Titulo" subtitle="subtitulo" valor={123}></FirstApp>
  </React.StrictMode>
);
