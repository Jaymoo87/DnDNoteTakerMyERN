import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import authService from "../services/auth";
import { useForm } from "../utilities/use-form";
import { useAuth } from "../utilities/use-auth";
import { Container, Toast } from "../components";
import Input from "../components/Input";

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
      .then(() => signin("/notes"))
      .catch((e) => Toast.error(e.message));
  };

  return (
    <Container>
      {" "}
      <form className="flex flex-col items-center justify-center border rounded-lg bg-opacity-60 lg:w-1/2 w-100 bg-secondary border-bordercolor">
        <div className="w-full max-w-xs form-control">
          <label className="label label-primary">
            <span className="namefont label-text text-warning">Email</span>
          </label>
          <Input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChanges}
            autoComplete="current-email"
          />
        </div>
        <br />
        <div className="w-full max-w-xs form-control">
          <label className="label label-primary">
            <span className="namefont label-text text-warning ">Password</span>
          </label>
          <Input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChanges}
            autoComplete="current-password"
          />
        </div>
        <br />
        <button onClick={handleClick} className="mx-8 my-4 shadow-md namefont btn btn-accent btn-wide">
          Login
        </button>
      </form>
      {location.state?.message && <div>{location.state?.message}</div>}
      {error && <div>{error}</div>}
    </Container>
  );
};

export default Login;
