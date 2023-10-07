import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext, useState, useRef } from "react";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/service" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 shadow-md">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-black">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="globe-outline"></ion-icon>
          </span>
          MetaSite
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black hover:text-indigo-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          {isLoggedIn ? (
            <div
              className="relative cursor-pointer"
              ref={dropdownRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Button>Dashboard</Button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-indigo-500 hover:text-white rounded-sm"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white rounded-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
