import React from "react";
import MainLayout from "../../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <section className="container mx-auto py-10 px-4">
        <div className="mt-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            About Metasite
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
            Welcome to the future of communication and innovation.
          </p>
        </div>

        <div className="my-10">
          <section className="py-10 border-t border-b border-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                At Metasite, we are driven by a commitment to excellence and
                innovation. We value integrity, creativity, and the relentless
                pursuit of a better future for all.
              </p>
              <img
                src="https://via.placeholder.com/400x300.png?text=Values"
                alt="Values"
                className="mt-8 mx-auto"
              />
            </div>
          </section>

          <section className="py-10 border-t border-b border-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Support
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                We are dedicated to providing exceptional support to our users.
                Our team is here to assist you 24/7, ensuring that you have the
                best experience with our platform.
              </p>
              <img
                src="https://via.placeholder.com/400x300.png?text=Support"
                alt="Support"
                className="mt-8 mx-auto"
              />
            </div>
          </section>

          <section className="py-10 border-t border-b border-gray-200">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Diversity & Inclusion
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mt-4">
                Metasite celebrates diversity and inclusion. We believe that
                great ideas come from people of all backgrounds and experiences.
              </p>
              <img
                src="https://via.placeholder.com/400x300.png?text=Diversity"
                alt="Diversity"
                className="mt-8 mx-auto"
              />
            </div>
          </section>
        </div>

        <div className="my-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Join Us Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Discover the future of communication with Metasite. Join us today
            and be a part of the innovation.
          </p>
          <img
            src="https://via.placeholder.com/400x300.png?text=Join+Us"
            alt="Join Us"
            className="mt-8 mx-auto"
          />
        </div>

        <div className="my-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            If you have any questions or inquiries, please feel free to contact
            us. We're here to help.
          </p>
          <img
            src="https://via.placeholder.com/400x300.png?text=Contact+Us"
            alt="Contact Us"
            className="mt-8 mx-auto"
          />
        </div>

        {/* Interactive Elements (Add your creative features here) */}
        {/* 1. Interactive Timeline */}
        {/* 2. Team Section */}
        {/* 3. User Testimonials */}
        {/* 4. Interactive Infographics */}
        {/* 5. Video Introduction */}
        {/* 6. Virtual Tour */}
        {/* 7. Gamification */}
        {/* 8. Interactive Maps */}
        {/* 9. Case Studies */}
        {/* 10. Progress Bars */}
        {/* 11. Virtual Reality (VR) Experience */}
        {/* 12. Interactive FAQs */}
        {/* 13. Artistic Visuals */}
        {/* 14. Engaging Polls */}
      </section>
    </MainLayout>
  );
};

export default About;
