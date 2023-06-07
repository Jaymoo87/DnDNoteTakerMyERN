import React from 'react';
import { SiOpenai } from 'react-icons/si';
import { NavLink, useParams } from 'react-router-dom';

interface SideDrawerProps {
  toggleVisible: () => void;
}

const SideDrawer = ({ toggleVisible }: SideDrawerProps) => {
  return (
    <ul className="p-4 overflow-y-auto font-bold menu w-80 text-primary bg-secondary ">
      <li key="home">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="login">
        <NavLink to="/login">Login</NavLink>
      </li>

      <li key="register">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li key="notes">
        <NavLink to="/notes" end>
          Notes
        </NavLink>
      </li>
      <li key="newnote">
        <NavLink to="/notes/new">AddNote</NavLink>
      </li>
      <li key="character">
        <NavLink to="/character">
          Create Origin Story <SiOpenai />
        </NavLink>
      </li>
    </ul>
  );
};

export default SideDrawer;
