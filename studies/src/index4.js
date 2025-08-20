import React from "react";
import { createRoot } from "react-dom/client";

// HTML attributes are camelCased in JSX: class => className // contenteditable => contentEditable
// alt-click for multiline writing

const pic = "https://picsum.photos/200";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food"
        src="https://www.kikkoman.pt/fileadmin/_processed_/4/2/csm_sushi-kakkoii_2c56fe3133.webp"
        alt=""
      />
      <img
        className="food"
        src="https://www.kikkoman.pt/fileadmin/_processed_/f/0/csm_1103-recipe-page-Spicy-Kimchi-Ramen-with-Pork_desktop_c8dc4e51e8.jpg"
        alt=""
      />
      <img
        className="food"
        src="https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg"
        alt=""
      />

      <img className="food" src={pic + "?grayscale"} alt="random" />
    </div>
  </div>
);
