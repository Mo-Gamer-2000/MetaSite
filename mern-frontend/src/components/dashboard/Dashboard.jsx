import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="w-full h-auto">
        <h1 className="flex items-center text-center justify-center text-6xl bg-indigo-600 py-8 shadow-2xl text-black">
          Dashboard
        </h1>
      </div>
      <div className="w-full h-auto">
        <p className="flex items-center text-center justify-start text-4xl py-5 px-5">
          {user.username}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
