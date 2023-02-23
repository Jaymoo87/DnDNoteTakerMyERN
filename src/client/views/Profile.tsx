import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utilities/use-auth";

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  const nav = useNavigate();
  const { authenticated, logout } = useAuth();
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return (
    <div>
      {" "}
      <h1>Profile</h1>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
