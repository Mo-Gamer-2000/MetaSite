import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-bold text-black">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-white
             hover:text-gray-400 duration-300
          text-sm cursor-pointer leading-6 font-semibold"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
