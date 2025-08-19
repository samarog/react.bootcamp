import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const customStyle = {
  color: "red",
  fontSize: "12rem",
  border: "2px dashed tomato",
  boxShadow: "1rem -10px 4px 20px black",
};

customStyle.color = "blue ";

root.render(
  <div>
    <h1 style={customStyle}>Hello World</h1>
  </div>
);
