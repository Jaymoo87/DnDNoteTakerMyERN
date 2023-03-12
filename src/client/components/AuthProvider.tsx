import React, { createContext, useState, useEffect } from "react";
import authService from "../services/auth";

export const AuthContext = createContext<
  [
    { authenticated: boolean; checking: boolean },
    React.Dispatch<React.SetStateAction<{ authenticated: boolean; checking: boolean }>>
  ]
>([
  {
    authenticated: false,
    checking: true,
  },
  () => {},
]);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = (props: AuthProviderProps) => {
  const [authState, setAuthState] = useState<{ authenticated: boolean; checking: boolean }>({
    authenticated: false,
    checking: true,
  });

  useEffect(() => {
    authService
      .validateToken()
      .then(() => {
        setAuthState({
          authenticated: true,
          checking: false,
        });
      })
      .catch(() => {
        setAuthState({
          authenticated: false,
          checking: false,
        });
      });
  }, []);

  if (authState.checking) return <h1>Loading...</h1>;

  return <AuthContext.Provider value={[authState, setAuthState]}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
