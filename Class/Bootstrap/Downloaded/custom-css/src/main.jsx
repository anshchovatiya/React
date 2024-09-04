import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductOne from "./Component/card.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductOne />
    <ProductOne />
    <ProductOne />
    <ProductOne />
  </StrictMode>
);
