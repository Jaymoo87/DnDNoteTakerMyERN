import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authService from "../services/auth";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const nav = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string>("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    authService
      .loginUser(values)
      .then(() => nav("/private"))
      .catch((e) => setError(e.message));
    // fetch("/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then((res) => res.json())

    //   .then((res) => {
    //     localStorage.setItem("token", res.token);
    //   })
    //   .catch((error) => console.log(error.message));
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
        {location.state?.from.pathname === "/private" && <div>Gotta Be logged in!</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Login;
