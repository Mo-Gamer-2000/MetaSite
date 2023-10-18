import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePost from "./components/CreatePost";
import AuthContext from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  const isLoggedIn = Boolean(user);

  const login = (userData) => {
    setUser(userData);
    // Set token to localstorage or perform other login-related tasks...
  };

  const logout = () => {
    setUser(null);
    // Remove token from localstorage or perform other logout-related tasks...
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      <Router>
        <div className="App">
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
