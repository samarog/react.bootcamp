import React from "react";
import { createRoot } from "react-dom/client";
import calc, { add, multiply, subtract, divide } from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.jsx file.
//If successful, your website should look the same as the Final.png

const root = createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{calc(add, 1, 2)}</li>
    <li>{calc(multiply, 2, 3)}</li> // trying alt methods
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>
);
