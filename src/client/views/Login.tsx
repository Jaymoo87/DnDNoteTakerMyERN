import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import authService from "../services/auth";
import { useForm } from "../utilities/use-form";
import { useAuth } from "../utilities/use-auth";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const { signin } = useAuth();
  const location = useLocation();
  const [error, setError] = useState<string>("");

  const { values, handleChanges } = useForm<{ [key: string]: string }>({});

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    authService
      .loginUser(values)
      .then(() => signin("/private"))
      .catch((e) => setError(e.message));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChanges}
            autoComplete="current-email"
          />
          <input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChanges}
            autoComplete="current-password"
          />
          <button onClick={handleClick}>Login</button>
        </form>
        {location.state?.message && <div>{location.state?.message}</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Login;
