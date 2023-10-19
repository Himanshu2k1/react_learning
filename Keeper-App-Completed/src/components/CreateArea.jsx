import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handlechange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handlechange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handlechange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} className="add">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
