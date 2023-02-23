import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import storage from "./storage";

export const useAuth = () => {
  const nav = useNavigate();
  const [authState, setAuthState] = useContext(AuthContext);

  const signin = (path: string) => {
    setAuthState((prev) => ({ ...prev, authenticated: true }));
    nav(path);
  };

  const logout = () => {
    setAuthState((prev) => ({ ...prev, authenticated: false }));
    storage.removeToken();
    nav("/login");
  };

  return {
    authenticated: authState.authenticated,
    signin,
    logout,
  };
};
