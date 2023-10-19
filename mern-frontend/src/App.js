import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePost from "./components/CreatePost";
import { AuthProvider } from "./context/AuthContext"; // Updated import

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Use AuthProvider here */}
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
    </AuthProvider>
  );
}

export default App;
