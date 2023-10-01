import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const mainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default mainLayout;
