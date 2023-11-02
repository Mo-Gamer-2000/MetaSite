import React from "react";
import MainLayout from "../../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <section className="container mx-auto flex flex-col px-5 py-10">
        <div className="mt-20">
          <h1 className="text-3xl text-center font-bold text-black md:text-5xl lg:text-4xl xl:text-5xl">
            About Us
          </h1>
          <p className="text-black mt-4 text-center md:text-xl lg:text-base xl:text-xl">
            This is the about page.
          </p>
          <div className="mx-auto block">
            <img
              className="mx-auto"
              src="https://dummyimage.com/600x400/000/fff"
              alt="Dummy"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
