import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  console.log("User when checking protected route:", user);

  if (!user) {
    console.log("No user found. Navigating to /login");
    navigate("/login");
    return null;
  }

  return children;
}
