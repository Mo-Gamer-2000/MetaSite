import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ identifier: "", password: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/users/login", formData);
      console.log("Login response:", data); // Log the response after login

      // This login function will now also store the token in local storage
      login({ user: data.user, token: data.token });
      console.log("LocalStorage after login:", localStorage);

      navigate("/dashboard"); // Redirect User to Dashboard Page
    } catch (err) {
      if (err.response) {
        console.error("Error logging in:", err.response.data);
      } else {
        console.error("Error making request:", err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        {/* Arrow back to homepage */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-blue-600 hover:text-blue-700"
        >
          <ion-icon name="arrow-back-outline" class="text-2xl"></ion-icon>
        </Link>

        <h2 className="text-2xl mb-4 font-semibold text-center">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="identifier"
          >
            Username or Email
          </label>
          <input
            type="text"
            id="identifier"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Username or email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Login
        </button>

        {/* Registration link */}
        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
