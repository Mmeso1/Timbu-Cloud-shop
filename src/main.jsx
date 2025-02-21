import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Assuming your HTML file has a div with id='root' for your app
const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Timbu-Cloud-shop">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
