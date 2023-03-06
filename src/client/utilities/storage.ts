const TOKEN_KEY = "token";
const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  return true;
};
const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  return true;
};

export default {
  getToken,
  removeToken,
  setToken,
};
