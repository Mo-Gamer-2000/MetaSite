import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import CTA from "./CTA/CTA";

const mainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <CTA />
      <Footer />
    </div>
  );
};

export default mainLayout;
