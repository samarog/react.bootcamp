import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello World</h1>
    <p>This a paragraph.</p>
  </div>
);

// classic js

// let title = document.createElement("h3");
// title.textContent = "Bye Star";
// document.getElementById("root").appendChild(title);
