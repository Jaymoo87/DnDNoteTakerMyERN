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
    <article className="grid w-auto p-4 m-3 justify-self-center rounded-3xl justify-items-center bg-neutral">
      <h1 className="flex justify-center h-10 p-2 font-serif font-bold text-black rounded shadow w-44 bg-secondary">
        Notes
      </h1>
      <div className="flex flex-col-reverse justify-center ">
        {notes.map((note) => (
          <div className="p-3 m-2 text-black shadow-lg card bg-secondary" key={`note-key-${note.id}`}>
            <h2>{note.first_name}</h2>
            <p className="flex justify-center">{note.body.slice(0, 125)} ...</p>
            <Link to={`/notes/${note.id}`} className="flex justify-end">
              <button className=" btn btn-primary btn-sm">View This Note</button>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Notes;
