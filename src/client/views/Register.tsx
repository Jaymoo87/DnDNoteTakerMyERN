import React, { useState } from "react";
import { useAuth } from "../utilities/use-auth";
import authService from "../services/auth";

interface RegisterProps {}

const Register = () => {
  const { signin } = useAuth();

  const [values, setValues] = useState<{ [key: string]: string }>({
    email: "register@test.com",
    password: "password123",
    first_name: "Test",
    last_name: "Register",
  });
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
      .registerUser(values)
      .then(() => signin("/private"))
      .catch((e) => console.log(e));
  };

  return (
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
      <input type="text" name="first_name" value={values.first_name || ""} onChange={handleChanges} />
      <input type="text" name="last_name" value={values.last_name || ""} onChange={handleChanges} />
      <button onClick={handleClick}>Register</button>
    </form>
  );
};

export default Register;
