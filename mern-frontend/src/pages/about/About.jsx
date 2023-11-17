import React from "react";
import MainLayout from "../../components/MainLayout";
import images from "../../constants/images";

const About = () => {
  return (
    <MainLayout>
      <section className="container mx-auto py-10 px-4">
        <div className="mt-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            About Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
            Welcome to the future of communication and innovation. Metasite is
            not just a platform; it's a journey that transforms the way we
            connect and create together.
          </p>
        </div>

        <div className="my-10">
          <section className="py-10 border-t border-b border-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                At Metasite, our values define who we are. We are driven by a
                commitment to excellence and innovation. We believe in the power
                of integrity, creativity, and the relentless pursuit of a better
                future for all.
              </p>
              <img
                src={images.Values}
                alt="Values"
                className="mt-8 mx-auto"
                width={650}
                height={450}
              />
            </div>
          </section>

          <section className="py-10 border-t border-b border-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Support
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                We take pride in providing exceptional support to our users. Our
                dedicated team is available 24/7, ensuring that you have the
                best experience with our platform. Your success is our success.
              </p>
              <img
                src={images.Support}
                alt="Support"
                className="mt-8 mx-auto"
                width={650}
                height={450}
              />
            </div>
          </section>

          <section className="py-10 border-t border-b border-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Diversity & Inclusion
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                At Metasite, we celebrate diversity and inclusion. We firmly
                believe that great ideas and innovation come from people of all
                backgrounds and experiences. Our global community is a testament
                to the power of inclusivity.
              </p>
              <img
                src={images.Diversity}
                alt="Diversity"
                className="mt-8 mx-auto"
                width={650}
                height={450}
              />
            </div>
          </section>
        </div>

        <div className="my-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Join Us Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Join us on this remarkable journey to discover the future of
            communication. Metasite is more than a platform; it's a community of
            innovators. Be a part of the change and witness the possibilities.
          </p>
          <img
            src={images.JoinUs}
            alt="Join Us"
            className="mt-8 mx-auto"
            width={650}
            height={450}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
