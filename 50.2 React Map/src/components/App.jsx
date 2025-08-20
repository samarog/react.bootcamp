import React from "react";
import Card from "./Card";
import contacts from "./Contact";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((e) => (
        <Card name={e.name} img={e.imgURL} tel={e.phone} email={e.email} />
      ))}
    </div>
  );
}

export default App;
