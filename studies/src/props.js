import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className={props.color} > {/* .color { color: blue } */}
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+12345678"
      email="b@yonce.com"
    />

    <Card
      color="color"
      name="Rasputin"
      img="https://marinamaral.com/wp-content/uploads/2019/08/51900-rasputin1.jpg"
      tel="+99999999"
      email="rasputin@nabramowiska.com"
    />
  </div>,
  document.getElementById("root")
);
