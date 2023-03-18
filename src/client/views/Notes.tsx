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
      <article className="bg-[url(https://r4.wallpaperflare.com/wallpaper/403/627/591/action-adventure-dragons-dungeons-wallpaper-267e8af12d15328e8e24c724d24214d1.jpg)] bg-cover grid p-4 m-3 shadow-lg rounded-2xl justify-self-center justify-items-center">
        <h1 className="flex justify-center h-10 p-2 font-serif font-bold text-black shadow w-44 bg-[url(../pictures/banner.png)] bg-center bg-contain bg-no-repeat">
          Notes
        </h1>

        <span className="font-serif">click scroll to see its contents</span>
        <div className="flex flex-col-reverse justify-center ">
          {notes.map((note) => (
            <div
              className="h-32 p-4 m-2 border shadow border-accent bg-neutral shadow-slate-800 rounded-xl"
              key={`note-key-${note.id}`}
            >
              <h2 className="pb-3">{note.first_name}'s Note</h2>

              <p className="flex justify-center px-5">{note.body.slice(0, 125)} ...</p>
              <div className="flex justify-end">
                <Link to={`/notes/${note.id}`}>
                  <GiTiedScroll className="m-2 mt-2 text-2xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Notes;
