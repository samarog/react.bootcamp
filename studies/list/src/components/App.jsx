import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState(["Buy milk"]);
  console.log(itemList);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addButton() {
    const cleanedItem = item.trim(); // guardrails!
    if (!cleanedItem) return; // guardrails!! DONT FORGET
    setItemList((prev) => [...prev, cleanedItem]);
    setItem("");
  }

  function addKey(event) {
    if (event.key === "Enter") {
      return addButton();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onKeyDown={addKey}
          type="text"
          onChange={handleChange}
          value={item}
        />
        <button onClick={addButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
