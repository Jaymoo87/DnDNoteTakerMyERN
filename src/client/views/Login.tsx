import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import authService from "../services/auth";
import { useForm } from "../utilities/use-form";
import { useAuth } from "../utilities/use-auth";
import Input from "../components/Input";
import { Container } from "../components";

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
    <Container>
      <h1>Login</h1>

      <form className="flex flex-col items-center justify-center">
        <div className="w-full max-w-xs form-control">
          <label htmlFor="" className="label">
            <span className="label-text">Email</span>
          </label>
          <Input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChanges}
            autoComplete="current-email"
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label htmlFor="" className="label">
            <span className="label-text">Password</span>
          </label>
          <Input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChanges}
            autoComplete="current-password"
            bordered={false}
          />
        </div>
        <button onClick={handleClick} className="mt-3 btn btn-primary btn-wide">
          Login
        </button>
      </form>
      {location.state?.message && <div>{location.state?.message}</div>}
      {error && <div>{error}</div>}
    </Container>
  );
};

export default Login;
