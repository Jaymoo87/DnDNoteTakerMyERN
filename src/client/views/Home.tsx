import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useAuth } from "../utilities/use-auth";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { authenticated } = useAuth();

  return (
    <div>
      <h1>Home {authenticated ? "logged in" : "logged out"}</h1>
      <div>
        <button className="btn btn-primary">Test Button</button>
      </div>
    </div>
  );
};

export default Home;
