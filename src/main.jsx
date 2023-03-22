import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './styles.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp></HelloWorldApp> */}
    {/* <FirstApp title="Titulo" subtitle="subtitulo" valor={123}></FirstApp> */}
    {/* <FirstApp title="titulo"></FirstApp> */}
    {/* <FirstApp title = "titulo" subtitle={123}></FirstApp> */}
    <FirstApp></FirstApp>
    {/* <CounterApp value={100}></CounterApp> */}
  </React.StrictMode>
);
