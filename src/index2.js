import React from "react";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// variables

const fName = "Gon";
const lName = "Amaro";
const fullName = [];
fullName.push(fName, lName);
const fullNameFormatted = fullName.join(" ");
const luckyNumber = 13;

// render accepts expressions but not statements. expressions return values, is always equal to something. statements are conditions: if/else

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <h1>Hello {fName + " " + lName}!</h1> */}
    <h1>Hello {fullNameFormatted}!</h1>
    <p>My lucky number is {Math.floor(Math.random() * 100)}</p>
  </div>
);
