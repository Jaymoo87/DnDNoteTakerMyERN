import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notesService from "../services/notes";

interface NotesProps {}

const Notes = () => {
  const [notes, setNotes] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    notesService
      .getAllNotes()
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes.map((note) => (
          <div className="p-3 m-2 shadow-lg card bg-primary" key={`note-key-${note.id}`}>
            <h2>{note.first_name}</h2>
            <Link to={`/notes/${note.id}`}>
              <button>View This Note</button>
            </Link>
            <p>{note.body.slice(0, 125)} ...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
