import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (open || dropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open, dropdownOpen]);

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
    <div className="w-full fixed top-0 left-0 shadow-md z-40">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center text-black"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="globe-outline"></ion-icon>
          </span>
          MetaSite
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black hover:text-indigo-600 duration-100"
              >
                {link.name}
              </a>
            </li>
          ))}

          {isLoggedIn ? (
            <div
              className="relative cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Button>Account</Button>
              {dropdownOpen && (
                <div
                  className={`fixed bottom-0 left-0 w-full transition-transform transform ${
                    dropdownOpen ? "translate-y-0" : "translate-y-full"
                  } z-50 bg-white shadow-t-lg p-4`}
                >
                  <Link
                    to="/dashboard"
                    className="block w-full mb-2 text-center px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-100"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-100"
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
