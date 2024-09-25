import { useState } from "react";
import Note from "./note";

function App({ notes }) {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note}></Note>
        ))}
      </ul>
    </>
  );
}

export default App;
