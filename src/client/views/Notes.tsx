import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import notesService from "../services/notes";
import { GiTiedScroll } from "react-icons/gi";

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
    <div className="container mx-auto ">
      <article className="bg-[url(https://r4.wallpaperflare.com/wallpaper/403/627/591/action-adventure-dragons-dungeons-wallpaper-267e8af12d15328e8e24c724d24214d1.jpg)] bg-cover grid p-4 m-3 shadow-lg rounded-2xl shadow-gray-900 justify-self-center justify-items-center bg-ghost">
        <h1 className="flex justify-center h-10 p-2 font-serif font-bold text-black rounded shadow w-44 bg-accent">
          Notes
        </h1>

        <span>click scroll to see the whole damn note</span>
        <div className="flex flex-col-reverse justify-center ">
          {notes.map((note) => (
            <div
              className="h-32 p-4 m-2 border shadow border-accent bg-neutral shadow-slate-800 rounded-xl"
              key={`note-key-${note.id}`}
            >
              <h2 className="pb-3">{note.first_name}'s Note</h2>

              <p className="flex justify-center px-5">{note.body.slice(0, 125)} ...</p>
              {/* <button className=" btn btn-primary btn-sm">View This Note</button> */}
              <Link to={`/notes/${note.id}`} className="flex justify-end">
                <GiTiedScroll className="mt-2 text-2xl" />
              </Link>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Notes;
