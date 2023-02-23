import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Profile, Login } from "./views";
import { NavBar, AuthProvider, Private } from "./components";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/private"
            element={
              <Private>
                <Profile />
              </Private>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
