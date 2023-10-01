import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-white justify-center">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-3 cursor-pointer inline-flex items-center
        rounded-full bg-black mx-2 text-xl hover:text-black hover:bg-white
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
