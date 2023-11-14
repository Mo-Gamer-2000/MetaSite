import React from "react";

const CTA = () => {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to unleash your creativity?</span>
          <span className="block text-black">Become a Blogger today!</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-300">
          Share your thoughts and stories with the world. Start your blogging
          journey now!
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0 mt-8">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6 bg-black hover:bg-white text-white hover:text-black hover:outline w-full transition ease-in duration-100 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
