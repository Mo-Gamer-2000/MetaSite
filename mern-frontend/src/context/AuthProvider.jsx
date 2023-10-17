// AuthProvider.js
import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = (props) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
