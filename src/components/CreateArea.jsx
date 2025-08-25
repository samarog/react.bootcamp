import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {!click ? (
          <div>
            <textarea
              name="content"
              onChange={handleChange}
              onClick={handleClick}
              value={note.content}
              placeholder="Take a note..."
              rows="1"
            />
          </div>
        ) : (
          <div>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <textarea
              name="content"
              onChange={handleChange}
              onClick={handleClick}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
          </div>
        )}
        <Zoom in={!click ? false : true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
