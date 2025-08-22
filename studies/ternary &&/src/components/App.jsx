import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* {currentTime > 12 ? <h2> Why are you still working? </h2> : null} */}
      {currentTime > 12 && <h2> Why are you still working? </h2>} {/* <---------- same as above but shorter */}
    </div>
  );
}

export default App;
