import React, { useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { AuthProvider, Drawer, NavBar, SideDrawer } from "../components";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { userid } = useParams();

  const toggleVisible = () => setVisible((p) => !p);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer position="bottom-right" autoClose={3000} draggable={false} pauseOnHover={false} />
        <Drawer side={<SideDrawer toggleVisible={toggleVisible} />} open={visible} onClickOverlay={toggleVisible}>
          <NavBar toggleVisible={toggleVisible} />

          <AppRoutes />
        </Drawer>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
