import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (user ? children : <Navigate to="/login" replace />)}
    />
  );
};

export default ProtectedRoute;
