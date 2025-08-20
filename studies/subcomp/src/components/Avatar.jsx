import React from "react";
import Card from "./Card";

function Avatar(props) {
  return <img className="circle-img" src={props.src} alt="avatar_img" />;
}

export default Avatar;
