import React, { useState } from "react"; // <-- Import useState
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // <-- State to toggle the menu

  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/">MetaSite</Link>
      </div>
      {/* Hamburger menu icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}{" "}
        {/* Conditionally render close or hamburger icon */}
      </div>
      <ul className={menuOpen ? "active" : ""}>
        {" "}
        {/* <-- Conditionally apply a class */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
