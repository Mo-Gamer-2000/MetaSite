import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePost from "./components/CreatePost";
import { AuthProvider } from "./context/AuthContext";
import PostDetailPage from "./pages/PostDetailPage";
import About from "./pages/about/About";
import Service from "./pages/service/Service";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/service" element={<Service />} />
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
            <Route path="/post/:postId" element={<PostDetailPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
