import React, { useState } from "react";

function App() {
  let now = new Date(2025, 1, 1, 12).toLocaleTimeString();
  console.log(now);

  const [time, setTime] = useState(now);

  function refreshTime() {
    let newNow = new Date().toLocaleTimeString();
    setTime(newNow);
  }

  setInterval(refreshTime, 1000); // <----- creates a simulation of a real clock

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>GET TIME</button>
    </div>
  );
}

export default App;

