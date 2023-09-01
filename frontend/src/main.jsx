import React from "react";
import ReactDOM from "react-dom/client";
import './global.css'
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
