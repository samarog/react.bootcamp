import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function setName(event) {
    const { value, name } = event.target;

    // classical

    // if (inputName === "fName") {
    //   setFullName({
    //     fName: newValue,
    //     lName: fullName.lName,
    //   });
    // } else if (inputName === "lName") {
    //   setFullName({
    //     fName: fullName.fName,
    //     lName: newValue,
    //   });

    // with prev

    // setFullName((prev) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prev.lName,
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: prev.fName,
    //       lName: value,
    //     };
    //   }
    // });

    // computed property names <-------

    setFullName((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={setName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={setName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
