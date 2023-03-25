import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import notesService from "../services/notes";

interface SideDrawerProps {
  toggleVisible: () => void;
}

const SideDrawer = ({ toggleVisible }: SideDrawerProps) => {
  const { userid } = useParams();

  console.log(userid);
  return (
    <ul className="p-4 overflow-y-auto font-bold menu w-80 text-primary bg-secondary ">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/notes">Notes</NavLink>
      </li>
      <li>
        <NavLink to="/notes/new">AddNote</NavLink>
      </li>
    </ul>
  );
};

export default SideDrawer;
