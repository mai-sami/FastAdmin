export const TokenAuth =JSON.parse(localStorage.getItem("token"))
export const Role = localStorage.getItem("role");

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};
export const isLogend = () => {
  return getUser() == null;
};

export const getUserName = () => {
  return getUser().username;
};

export const getUserEmail = () => {
  return getUser().email;
};
export const getUserRol = () => {
  return getUser() && getUser().role;
};
export const isAdminRole = () => {
  return  Role === "admin";
};
export const isUserRole = () => {
  return Role === "user";
};
