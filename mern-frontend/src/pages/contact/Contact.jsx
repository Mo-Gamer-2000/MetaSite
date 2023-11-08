import React from "react";
import MainLayout from "../../components/MainLayout";
import { FiMail } from "react-icons/fi"; // Import the email icon from a suitable icon library

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
                <p className="text-primary text-lg font-semibold">Email:</p>
                <p className="text-black text-lg">contact@metasite.com</p>
              </div>
              <div className="mt-4">
                <p className="text-primary text-lg font-semibold">Phone:</p>
                <p className="text-black text-lg">+1 (123) 456-7890</p>
              </div>
              <div className="mt-8 text-center">
                <FiMail className="w-12 h-12 text-primary mx-auto" />
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
                    Your Name
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
                    Your Email
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
                    Your Message
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
                  className="w-full bg-primary text-white bg-indigo-600 font-semibold rounded-lg px-5 py-3 shadow-md hover:bg-indigo-400 transition duration-300"
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
