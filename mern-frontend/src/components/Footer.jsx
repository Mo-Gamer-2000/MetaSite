import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="items-center shadow-inner">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-ellipsis">
          © {currentYear} MetaSite. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
