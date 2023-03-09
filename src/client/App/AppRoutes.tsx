import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Profile, Login, Register, Notes, NoteDetails, AddNote, UpdateNote } from "../views";
import { Private } from "../components";

interface AppRoutesProps {}

const AppRoutes = (props: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/private"
        element={
          <Private>
            <Profile />
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
