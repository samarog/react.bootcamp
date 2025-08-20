//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import react from "react";
import { createRoot } from "react-dom/client";

const myName = "Gonçalo Amaro";
const currentYear = new Date().getFullYear();

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
      corrupti, cupiditate at voluptatem, adipisci iure velit dolorem vitae
      animi assumenda? Velit impedit totam quis saepe, officiis nobis unde
      eaque!
    </p>

    <footer>
      <p>Created by {myName} </p>
      <p>Copyright {currentYear} </p>
    </footer>
  </div>
);
