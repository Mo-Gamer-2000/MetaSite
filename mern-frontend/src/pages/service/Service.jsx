import React from "react";
import MainLayout from "../../components/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVrCardboard,
  faHeadset,
  faRobot,
  faMap,
  faUserFriends,
  faFlask,
  faCommentDots,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  faVrCardboard,
  faRobot,
  faMap,
  faUserFriends,
  faFlask,
  faCommentDots,
  faUser,
  faHeadset,
];

const serviceCategories = [
  {
    title: "Virtual Reality (VR)",
    description:
      "Immerse yourself in the future with our VR experiences. Explore virtual worlds and interactive simulations.",
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "Harness the power of AI for data analysis, automation, and intelligent decision-making.",
  },
  {
    title: "Interactive Maps",
    description:
      "Explore our interactive map solutions for real-time data visualization and location-based services.",
  },
  {
    title: "Augmented Communication",
    description:
      "Connect and communicate with a touch of the future. Experience augmented reality for better interactions.",
  },
  {
    title: "Innovation Labs",
    description:
      "Collaborate with us in our innovation labs to create groundbreaking solutions for your industry.",
  },
  {
    title: "Communication Platform",
    description:
      "Our advanced communication platform ensures real-time, seamless connectivity for all your needs.",
  },
  {
    title: "User-Centric Design",
    description:
      "We prioritize user-centric design for all our services, providing an intuitive and engaging experience.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you in your journey with us.",
  },
];

const Service = () => {
  return (
    <MainLayout>
      <section className="container mx-auto py-10 px-4">
        <div className="mt-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Our Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
            Explore a world of services that transform the way you communicate
            and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <FontAwesomeIcon
                icon={icons[index]}
                size="2x"
                className="text-primary mb-2"
              />
              <h2 className="text-xl font-semibold text-black">
                {category.title}
              </h2>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Service;
