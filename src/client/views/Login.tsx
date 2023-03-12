import React, { useState } from "react";
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

  return (
    <div>
      <h1 className="m-3 font-serif">Login</h1>
      <div>
        <form className="p-2 artboard bg-info col-2">
          <label className="label label-primary">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChanges}
            autoComplete="current-email"
            className="mb-2 rounded input-sm input-border input-primary"
          />
          <br />
          <input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChanges}
            autoComplete="current-password"
            className="mb-2 rounded input-sm input-border input-primary"
          />
          <br />
          <button onClick={handleClick} className="font-serif btn btn-secondary">
            Login
          </button>
        </form>
        {location.state?.message && <div>{location.state?.message}</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Login;
