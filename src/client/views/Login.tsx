import React from "react";

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <input type="email">
            <input type="password">
              <button>Login</button>
            </input>
          </input>
        </form>
      </div>
    </div>
  );
};

export default Login;
