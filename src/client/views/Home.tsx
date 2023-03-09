import React from "react";
import { Toast } from "../components";

import { useAuth } from "../utilities/use-auth";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { authenticated } = useAuth();

  const testToast = () => {
    Toast.error("woooo");
  };

  return (
    <div>
      <h1>Home {authenticated ? "logged in" : "logged out"}</h1>
      <div>
        <button onClick={testToast} className="btn btn-primary">
          Test Button
        </button>
      </div>
    </div>
  );
};

export default Home;
