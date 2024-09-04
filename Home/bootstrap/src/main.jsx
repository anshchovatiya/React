import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import Timer from "./components/LocalTimer.jsx";
import List from "./components/List.jsx"
import Calculator from "./components/Calculator.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
    {/* <List></List> */}
    {/* <Calculator/> */}
    <Timer></Timer>
    
    </StrictMode>
);
