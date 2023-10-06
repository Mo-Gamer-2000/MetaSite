import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import AuthContext from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(null);
  const isLoggedIn = Boolean(user);
  const login = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login }}>
      <Router>
        <div className="App">
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
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
