import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../../../api";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsData = await fetchAllPosts();
        setPosts(postsData);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    }

    loadPosts();
  }, []);

  return (
    <section className="container mx-auto flex flex-col px-5 py-10">
      <div className="mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center">
          Welcome to MetaSite
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 text-center">
          Step into the Universe of Virtual and Augmented Communication. Connect
          with your loved ones in real-time and share your experiences with a
          touch of the future.
        </p>

        <div className="relative mt-6">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
          <input
            className="w-full placeholder:font-bold font-semibold text-black 
            placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 py-3 shadow-[rgba(13,38,76,0.19)0px9px20px] 
            focus:outline-none md:py-4"
            type="text"
            placeholder="Explore Artificial Intelligence, Machine Learning, and more..."
          />
          <button
            className="w-full bg-black hover:bg-white bg-primary text-white hover:text-black hover:outline font-semibold 
          rounded-lg px-5 py-3 md:w-auto md:absolute md:right-2 md:top-1/2 
          md:-translate-y-1/2 md:py-2 duration-100"
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
              🔥 Explore Machine Learning (ML)
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold text-sm">
              🔥 Dive into Artificial Intelligence (AI)
            </li>
          </ul>
        </div>
      </div>

      {/* Enhanced Blog Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {posts.map((post, idx) => (
          <Link to={`/post/${post._id}`} key={idx}>
            <div className="bg-white shadow-lg rounded p-4">
              <img
                className="w-full h-48 object-cover rounded-t"
                src={post.image} // Make sure the post object has an 'image' property
                alt={post.title}
              />
              <h2 className="mt-4 text-xl font-semibold text-black">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.caption}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Main;
