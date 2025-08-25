import React, { useState } from "react";

function Item(props) {
  //   const [isDone, setIsDone] = useState(false);

  //   function strike() {
  //     setIsDone((prev) => {
  //       return !prev;
  //     });
  //   }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Item;
