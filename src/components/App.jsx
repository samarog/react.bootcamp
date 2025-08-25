import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([]);

function handleAdd(note) {
  console.log(note)
  setNoteList(prev => [...prev, note])
}

function handleDelete(id) {
  console.log('delete was triggered ' + id);
  setNoteList(prev => prev.filter((e, i) => i !== id));
}
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd}/>
      {noteList.map((e, i) => <Note key={i} id={i} title={e.title} content={e.content} onDelete={handleDelete} />)}
      <Footer />
    </div>
  );
}

export default App;
