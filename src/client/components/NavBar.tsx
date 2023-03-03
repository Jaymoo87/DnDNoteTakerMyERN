import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/private">Private</Link>
      <Link to="/register">Register</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/notes/new">AddNote</Link>
    </div>
  );
};

export default NavBar;
