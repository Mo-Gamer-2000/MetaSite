import React from "react";
import { FiSearch } from "react-icons/fi";
import images from "../../../constants/images";

const Main = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      title: "The Future with AI",
      caption: "Explore how artificial intelligence is poised to reshape our world, from healthcare to finance, and what it means for humanity's future.",
      image: `${images.Main}`,
    },
    {
      title: "The Century of Robotics",
      caption: "Dive deep into the era of robotics, understanding its rapid evolution, and the potential it holds for revolutionizing industries.",
      image: `${images.Main}`,
    },
    {
      title: "The Quantum Revolution",
      caption: "Unravel the mysteries of quantum computing and how it might be the key to unlocking unprecedented computational power.",
      image: `${images.Main}`,
    },
  ];
  

  return (
    <section className="container mx-auto flex flex-col px-5 py-10">
      <div className="mt-20">
        <h1 className="text-3xl text-center font-bold text-black md:text-5xl lg:text-4xl xl:text-5xl">
          MetaSite
        </h1>
        <p className="text-black mt-4 text-center md:text-xl lg:text-base xl:text-xl">
          Welcome, in the Universe of Virtual and Augmented Communication
          Platform. Speak to your Friends and Family in Real-Time and Share your
          Experiences with a Realistic Touch of the Future.
        </p>

        <div className="relative mt-6">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
          <input
            className="w-full placeholder:font-bold font-semibold text-black 
            placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 py-3 shadow-[rgba(13,38,76,0.19)0px9px20px] 
            focus:outline-none md:py-4"
            type="text"
            placeholder="Artificial intelligence"
          />
          <button
            className="w-full mt-2 bg-primary text-black font-semibold 
          rounded-lg px-5 py-3 md:w-auto md:absolute md:right-2 md:top-1/2 
          md:-translate-y-1/2 md:py-2"
          >
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

      {/* Blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded p-4">
            <img
              className="w-full h-48 object-cover rounded-t"
              src={post.image}
              alt={post.title}
            />
            <h2 className="mt-4 text-xl font-semibold text-black">
              {post.title}
            </h2>
            <p className="text-black mt-2">{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
