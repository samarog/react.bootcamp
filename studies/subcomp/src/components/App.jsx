import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Info from "./Info";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src="https://avatars.githubusercontent.com/u/196069453?v=4" />
      <Info detailInfo="00123" />
      {contacts.map((e) => {
        console.log(e.key);
        return (
          <Card
            key={e.key}
            name={e.name}
            img={e.imgURL}
            tel={e.phone}
            email={e.email}
          />
        );
      })}
    </div>
  );
}

export default App;
