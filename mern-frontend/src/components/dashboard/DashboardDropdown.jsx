import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const DashboardDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)}>Dashboard</button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white">
          <div className="py-1">
            <button
              onClick={() => navigate("/dashboard")}
              className="block w-full text-left px-4 py-2"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="block w-full text-left px-4 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
