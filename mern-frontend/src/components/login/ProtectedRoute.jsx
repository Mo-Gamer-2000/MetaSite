import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  // State to track if redirection has already occurred
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    console.log("Effect is running. isLoggedIn:", isLoggedIn);

    if (!isLoggedIn && !hasRedirected) {
      console.log("Navigating to /login");
      navigate("/login");
      setHasRedirected(true); // Set it to true after redirecting
    }
  }, [isLoggedIn, navigate, hasRedirected]);

  return children;
}
