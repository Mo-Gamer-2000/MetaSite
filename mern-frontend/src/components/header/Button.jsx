import React from "react";

const Button = (props) => {
  return (
    <button className="bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 hover:outline py-2 px-6 rounded-lg md:ml-8 duration-100 font-semibold">
      {props.children}
    </button>
  );
};

export default Button;
