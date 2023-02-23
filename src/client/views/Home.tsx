import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { useAuth } from "../utilities/use-auth";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { authenticated } = useAuth();

  return <div>Home {authenticated ? "logged in" : "logged out"}</div>;
};

export default Home;
