import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { Home, MyNotes, Login, Register, Notes, NoteDetails, AddNote, UpdateNote } from "../views";
import { Private } from "../components";

interface AppRoutesProps {}

const AppRoutes = (props: AppRoutesProps) => {
  const { userid } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/notes/mynotes/:userid"
        element={
          <Private>
            <MyNotes />
          </Private>
        }
      />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:id" element={<NoteDetails />} />
      <Route
        path="/notes/new"
        element={
          <Private>
            <AddNote />
          </Private>
        }
      />
      <Route
        path="/notes/:id/update"
        element={
          <Private>
            <UpdateNote />
          </Private>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
