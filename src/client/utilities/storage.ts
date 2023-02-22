const TOKEN_KEY = "token";
const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  return true;
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  return true;
};

export default {
  getToken,
  removeToken,
  setToken,
};
