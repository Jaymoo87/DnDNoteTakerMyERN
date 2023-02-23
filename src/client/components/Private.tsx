import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../utilities/use-auth";

interface PrivateProps {
  children: React.ReactNode;
}

const Private = (props: PrivateProps) => {
  const location = useLocation();
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" state={{ message: "gotta be logged in buddy", from: location }} replace={true} />;
  }
  return <>{props.children}</>;
};

export default Private;
