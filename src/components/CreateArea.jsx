import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleAddNote(event) {
        event.preventDefault()
        props.onAdd(note)
        setNote({
        title: "",
        content: "",
        })
        }

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
