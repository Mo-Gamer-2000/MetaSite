import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-600 text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ">
          <span className="text-black">© {currentYear} MetaSite.</span> All
          rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
