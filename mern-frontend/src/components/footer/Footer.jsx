import React from "react";
import ItemContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-600 text-white z-30 py-7">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-indigo-600">
        <div className="md:w-2/5 text-center md:text-left mb-6 lg:leading-normal">
          <h1 className="lg:text-3xl text-2xl font-semibold">
            <span className="text-black">© {currentYear} MetaSite.</span> All
            rights reserved.
          </h1>
        </div>
        <div className="md:flex md:items-center">
          <label htmlFor="email" className="sr-only">
            Enter your email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-black hover:bg-white duration-100 px-5 py-2.5 rounded-lg text-white hover:text-black hover:outline md:w-auto w-full font-semibold"
            aria-label="Register for Updates"
          >
            Register
          </button>
        </div>
      </div>
      <ItemContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-sm pb-8">
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;