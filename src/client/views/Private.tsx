import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface PrivateProps {}

const Private = (props: PrivateProps) => {
  const nav = useNavigate();
  const location = useLocation();
  const TOKEN = localStorage.getItem("token");
  if (!TOKEN) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  useEffect(() => {
    fetch("/auth/validate/me", { headers: { Authorization: `Bearer ${TOKEN}` } })
      .then((res) => {
        if (res.status !== 200) {
          nav("/login");
        }
      })
      .then((res) => console.log(res));
  }, []);

  return <div>Private</div>;
};

export default Private;
