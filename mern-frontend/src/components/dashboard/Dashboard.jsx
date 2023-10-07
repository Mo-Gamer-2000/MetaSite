import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-10 ">
      <div className="mb-8">
        <h1 className="text-center text-3xl lg:text-4xl text-black py-4 shadow-md">
          Dashboard
        </h1>
      </div>

      {/* Profile Information */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-lg lg:text-xl font-medium mb-4 border-b pb-2">
          Profile Information
        </h2>
        <div className="mt-4 space-y-2">
          <p className="flex justify-between">
            <span className="font-medium">Username:</span>
            <span>{user.username}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </p>
          {/* Add more user details as needed */}
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="flex justify-start mb-8 space-x-4 overflow-x-auto">
        <button className="px-6 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-full focus:outline-none focus:bg-blue-600">
          Section 1
        </button>
        <button className="px-6 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-full focus:outline-none focus:bg-blue-600">
          Section 2
        </button>
        {/* Add more sections as needed */}
      </div>

      {/* Content area depending on the selected tab. */}
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        {/* Replace the below line with actual content */}
        <p className="text-center text-gray-700">
          Select a tab to view its content.
        </p>
      </div>

      {/* Go back to home button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-block px-6 py-2 text-sm sm:text-base bg-red-500 text-white rounded-full focus:outline-none focus:bg-red-600"
        >
          Return to HomePage
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
