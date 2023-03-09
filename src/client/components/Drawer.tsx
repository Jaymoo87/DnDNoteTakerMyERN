import React from "react";

interface DrawerProps {
  open: boolean;
  children: React.ReactNode;
  side: React.ReactNode;
  onClickOverlay: () => void;
}

const Drawer = ({ open, children, onClickOverlay, side }: DrawerProps) => {
  return (
    <div className="drawer" aria-expanded={open}>
      <input type="checkbox" id="super-drawer" className="drawer-toggle" readOnly checked={open} />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="super-drawer" className="drawer-overlay" onClick={onClickOverlay}>
          {side}
        </label>
      </div>
    </div>
  );
};

export default Drawer;
