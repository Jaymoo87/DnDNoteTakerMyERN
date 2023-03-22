import React from "react";
import { SiDungeonsanddragons } from "react-icons/si";

interface NavBarProps {
  toggleVisible: () => void;
}

const NavBar = ({ toggleVisible }: NavBarProps) => {
  return (
    <div>
      <button onClick={toggleVisible} className="btn btn-square btn-ghost">
        <SiDungeonsanddragons className="text-3xl md:text-3xl text-warning" />
      </button>
    </div>
  );
};

export default NavBar;
