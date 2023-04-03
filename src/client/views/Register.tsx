import React, { useState } from "react";
import { useAuth } from "../utilities/use-auth";
import { useForm } from "../utilities/use-form";
import authService from "../services/auth";
import Input from "../components/Input";
import { Container } from "../components";

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
    <Container>
      <form className="flex flex-col items-center justify-center p-2 m-10 bg-opacity-50 border rounded-lg lg:w-1/2 w-100 bg-secondary border-bordercolor">
        <div className="w-full max-w-xs form-control">
          <label className="block m-2">
            <span className="font-extrabold namefont label-text text-warning ">First Name</span>
          </label>
          <Input type="text" name="first_name" value={values.first_name || ""} onChange={handleChanges} />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="block m-2">
            <span className="font-extrabold namefont label-text text-warning ">Last Name</span>{" "}
          </label>
          <Input type="text" name="last_name" value={values.last_name || ""} onChange={handleChanges} />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="block m-2">
            <span className="font-extrabold namefont label-text text-warning ">Email</span>
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
          <label className="block m-2">
            <span className="font-extrabold namefont label-text text-warning ">Password</span>
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
        <div className="flex justify-center m-2">
          <button onClick={handleClick} className=" btn btn-info btn-wide">
            Register
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Register;
