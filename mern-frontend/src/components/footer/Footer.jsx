import React from "react";
import ItemContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-600 text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-indigo-600 py-7">
        <h1 className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center">
          <span className="text-black">© {currentYear} MetaSite.</span> All
          rights reserved.
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className=" bg-black hover:bg-gray-900 duration-300 px-5 py-2.5 font-[Martian Mono] rounded-md text-white md:w-auto w-full">
            Enter
          </button>
          <p className="text-black text-1xl pt-1 font-semibold">
            Sign up for weekly updates⬆️
          </p>
        </div>
      </div>
      <ItemContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
