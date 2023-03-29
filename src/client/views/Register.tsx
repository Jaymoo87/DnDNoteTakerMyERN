import React, { useState } from "react";
import { useAuth } from "../utilities/use-auth";
import { useForm } from "../utilities/use-form";
import authService from "../services/auth";

interface RegisterProps {}

const Register = () => {
  const { signin } = useAuth();
  const [error, setError] = useState<string>("");

  const { values, handleChanges } = useForm<{ [key: string]: string }>({});

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authService
      .registerUser(values)
      .then(() => signin("/notes"))
      .catch((e) => console.log(e));
  };

  return (
    <form className="grid grid-cols-1 p-2 m-10 bg-opacity-50 border rounded-lg lg:w-1/2 w-100 bg-secondary border-bordercolor">
      <label className="block m-2">
        <span className="font-extrabold namefont label-text text-warning ">First Name</span>
        <input
          type="text"
          name="first_name"
          value={values.first_name || ""}
          onChange={handleChanges}
          className="block w-full p-3 mt-1 bg-gray-700 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block m-2">
        <span className="font-extrabold namefont label-text text-warning ">Last Name</span>
        <input
          type="text"
          name="last_name"
          value={values.last_name || ""}
          onChange={handleChanges}
          className="block w-full p-3 mt-1 bg-gray-700 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block m-2">
        <span className="font-extrabold namefont label-text text-warning ">Email</span>
        <input
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChanges}
          autoComplete="current-email"
          className="block w-full p-3 mt-1 bg-gray-700 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block m-2">
        <span className="font-extrabold namefont label-text text-warning ">Password</span>
        <input
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChanges}
          autoComplete="current-password"
          className="block w-full p-3 mt-1 bg-gray-700 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <br />
      <div className="flex justify-center m-2">
        <button onClick={handleClick} className=" btn btn-info">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
