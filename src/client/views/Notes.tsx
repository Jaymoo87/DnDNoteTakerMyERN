import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import notesService from "../services/notes";
import { GiTiedScroll } from "react-icons/gi";
import { useAuth } from "../utilities/use-auth";
import { UserNoteTable } from "../../types";

interface NotesProps {}

const Notes = () => {
  const [notes, setNotes] = useState<UserNoteTable[]>([]);
  const { authenticated } = useAuth();

  useEffect(() => {
    notesService
      .getAllNotes()
      .then((data) => setNotes(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container mx-auto ">
      <h1 className="flex justify-center ">
        {authenticated ? (
          <span className="p-3 mt-2 font-extrabold text-center rounded-lg text-warning bg-opacity-70 bg-secondary">
            The Realm Welcomes You <br /> Tap a scroll to see its contents
          </span>
        ) : (
          <span className="flex justify-center p-3 font-serif text-warning">
            You must be accepted into the Realm stranger!!
          </span>
        )}
      </h1>
      <div className="container grid grid-cols-1 p-4 m-3 bg-no-repeat shadow-lg rounded-2xl justify-self-center justify-items-center">
        <h1 className="flex justify-center h-10 p-2 font-serif font-bold text-primary shadow w-48 bg-[url(../../../pictures/banner.png)] bg-center bg-contain bg-no-repeat">
          Notes
        </h1>

        <div className="flex flex-col-reverse justify-center w-9/10 ">
          {notes.map((note) => (
            <div
              className="p-4 m-2 border shadow h-56 border-warning bg-[url(../../../pictures/greyParchment.jpg)] shadow-slate-800 rounded-xl"
              key={`note-key-${note.id}`}
            >
              <h2 className="pb-3 text-secondary namefont">{note.first_name}'s Note</h2>

              <p className="flex justify-center px-5 notefont text-secondary">{note.body.slice(0, 100)} ... </p>
              <Link to={`/notes/${note.id}`} className="flex justify-end">
                <GiTiedScroll className="p-1 m-2 mt-2 text-3xl rounded text-secondary btn-ghost" />
              </Link>
              <Link to={`/notes/mynotes/${note.userid}`}> All of {note.first_name}'s Notes</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
