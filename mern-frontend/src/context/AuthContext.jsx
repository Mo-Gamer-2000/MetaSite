import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: (userData) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // When the component mounts, check if there's a token in local storage
    // If there is, consider the user to be logged in
    const token = localStorage.getItem("token");
    if (token) {
      // TODO: If needed, fetch user details here or do other initialization
      setUser({ token }); // Just storing the token as user data for this example
    }
  }, []);

  const isLoggedIn = Boolean(user);

  const login = (userData) => {
    setUser(userData);

    // If userData contains a token, store it in local storage
    if (userData && userData.token) {
      localStorage.setItem("token", userData.token);
      console.log("After setting token, local storage is:", localStorage);
      console.log("Token value is:", userData.token);

    }
  };

  const logout = () => {
    setUser(null);
    // Remove token from local storage
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
