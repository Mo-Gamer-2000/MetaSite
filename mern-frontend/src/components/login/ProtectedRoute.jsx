import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  console.log("User when checking protected route:", user); // Moved this up to always log, regardless of the outcome
  console.log("Token when checking protected route:", token); // Log the token as well

  if (!user) {
    console.log("No user found. Navigating to /login");
    navigate("/login");
    return null;
  }

  if (!token) {
    console.log("No token found. Navigating to /login");
    navigate("/login");
    return null;
  }

  return children;
}
