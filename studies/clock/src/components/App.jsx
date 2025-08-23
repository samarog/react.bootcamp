import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  console.log(time);

  function refreshTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(refreshTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}

export default App;
