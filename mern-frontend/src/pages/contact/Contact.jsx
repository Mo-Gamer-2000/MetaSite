import React from "react";
import MainLayout from "../../components/MainLayout";
import images from "../../constants/images";

const Contact = () => {
  return (
    <MainLayout>
      <section className="container mx-auto py-10 px-4">
        <div className="mt-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
            If you have any questions, ideas, or inquiries, please don't
            hesitate to contact us. We're here to help you on your journey to
            innovation and communication excellence.
          </p>
        </div>

        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                Contact Information
              </h2>
              <p className="text-gray-600 mt-2">
                Feel free to reach out to us using the following contact
                details.
              </p>
              <div className="mt-4">
                <p className="text-primary text-lg font-semibold">E-Mail:</p>
                <p className="text-black text-lg">MetaSite@gmail.co.uk</p>
              </div>
              <div className="mt-4">
                <p className="text-primary text-lg font-semibold">
                  Contact Number:
                </p>
                <p className="text-black text-lg">+44 07 444 888 555</p>
              </div>
              <div className="mt-8 text-center">
                <img
                  src={images.ContactUs}
                  alt="Contact"
                  className="w-full max-w-lg mx-auto"
                  width={650}
                  height={450}
                />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
                Contact Form
              </h2>
              <p className="text-gray-600 mt-2">
                Use the form below to send us a message, and we'll get back to
                you as soon as possible.
              </p>
              <form className="mt-4">
                <div className="mb-4">
                  <label
                    className="block text-primary text-lg font-semibold mb-2"
                    htmlFor="name"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full placeholder:font-bold font-semibold text-black placeholder:text-[#959EAD] rounded-lg px-4 py-3 shadow-md focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-primary text-lg font-semibold mb-2"
                    htmlFor="email"
                  >
                    E-Mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full placeholder:font-bold font-semibold text-black placeholder:text-[#959EAD] rounded-lg px-4 py-3 shadow-md focus:outline-none"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-primary text-lg font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full placeholder:font-bold font-semibold text-black placeholder:text-[#959EAD] rounded-lg px-4 py-3 shadow-md focus:outline-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white bg-indigo-600 font-semibold rounded-lg px-5 py-3 shadow-md hover:bg-indigo-400 transition duration-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
