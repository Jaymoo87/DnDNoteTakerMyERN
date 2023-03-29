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
      .then(() => signin("/notes"))
      .catch((e) => setError(e.message));
  };

  return (
    <div>
      <h1 className="m-3 font-serif text-">Login</h1>
      <div>
        <form className="grid grid-cols-1 p-2 m-10 border rounded-lg lg:w-1/2 w-100 bg-secondary border-bordercolor">
          <label className="label label-primary">
            <span className="namefont label-text text-warning">Email:</span>
          </label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChanges}
            autoComplete="current-email"
            className="block w-full p-3 mt-1 font-serif bg-gray-700 border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <br />
          <label className="label label-primary">
            <span className="namefont label-text text-warning ">Password:</span>
          </label>
          <input
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChanges}
            autoComplete="current-password"
            className="block w-full p-3 mt-1 font-serif bg-gray-700 border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <br />
          <button onClick={handleClick} className="mx-8 my-4 shadow-md namefont btn btn-info">
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
