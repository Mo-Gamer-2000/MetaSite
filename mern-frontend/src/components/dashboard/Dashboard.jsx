import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        <p>Welcome, {user.username}</p>
      </div>
    </div>
  );
};

export default Dashboard;
