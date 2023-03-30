import React from "react";
import { NavLink } from "react-router-dom";

interface SideDrawerProps {
  toggleVisible: () => void;
}

const SideDrawer = ({ toggleVisible }: SideDrawerProps) => {
  return (
    <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/private">Private</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/notes" end>
          Notes
        </NavLink>
      </li>
      <li>
        <NavLink to="/notes/new">AddNote</NavLink>
      </li>
    </ul>
  );
};

export default SideDrawer;
