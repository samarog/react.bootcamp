import React from "react";
import { createRoot } from "react-dom/client";
import * as calculator from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

const root = createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{calculator.add(1, 2)}</li>
    <li>{calculator.multiply(2, 3)}</li>
    <li>{calculator.subtract(7, 2)}</li>
    <li>{calculator.divide(5, 2)}</li>
  </ul>
);
