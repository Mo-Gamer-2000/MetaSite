import React from "react";
import { FiSearch } from "react-icons/fi";
import images from "../../../constants/images";

const Main = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-10 lg:flex-row">
      <div className="mt-20 lg:w-1/2">
        <h1 className="text-3xl text-center font-bold text-black md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[520px]">
          MetaSite
        </h1>
        <p className="text-black mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Welcome, in the Universe of Virtual and Augmented Communication
          Platform. Speak to your Friends and Family in Real-Time and Share your
          Experiences with a Realistic Touch of the Future.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative -z-10">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-black placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Artificial intelligence"
            />
          </div>
          <button className="w-full bg-primary text-black font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm text-black font-semibold italic">
            Hot Topics:
          </span>
          <ul className="flex gap-x-2">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold text-sm">
              🔥Machine Learning
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold text-sm">
              🔥Artificial Intelligence (AI)
            </li>
          </ul>
        </div>
      </div>
      {/* Image is hidden on SM and MD devices, only visible on LG and above */}
      <div className="hidden lg:block lg:1/2 h-[90vh]">
        <img
          className="w-auto h-full ml-28"
          src={images.Main}
          alt="Bots are communicating"
        />
      </div>
    </section>
  );
};

export default Main;
