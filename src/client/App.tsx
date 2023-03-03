import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Profile, Login, Register, Notes, NoteDetails, AddNote } from "./views";
import { NavBar, AuthProvider, Private } from "./components";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
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
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
