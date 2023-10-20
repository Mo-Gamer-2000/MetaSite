import React, { useState, useEffect } from "react"; // <-- Added useEffect
import AuthContext from "./AuthContext";

export const AuthProvider = (props) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    // <-- This effect runs on component mount
    const token = localStorage.getItem("token");
    if (token && storedUser) {
      setUser(storedUser); // <-- If token and user data exist in local storage, set them to state
    }
  }, []); // <-- Empty dependency array means this effect runs only once on mount

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
