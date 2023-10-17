import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user) {
    console.log("No user found. Navigating to /login");
    navigate("/login");
    return null; // This ensures that nothing renders if there's no user.
  }

  return children;
}
