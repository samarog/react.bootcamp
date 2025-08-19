//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import { createRoot } from "react-dom/client";

let hello = "";
let dynamicStyle = {};
const now = new Date().getHours(); // test with getMilisseconds()

console.log(now);

if (now > 5 && now < 13) {
  hello = "Good Morning";
  dynamicStyle = {
    color: "red",
  };
} else if (now >= 13 && now < 20) {
  hello = "Good Afternoon";
  dynamicStyle = {
    color: "green",
  };
} else {
  hello = "Good Evening";
  dynamicStyle = {
    color: "blue",
  };
}

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" style={dynamicStyle}>
      {hello}
    </h1>
  </div>
);
