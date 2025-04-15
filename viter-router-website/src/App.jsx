import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/header/Navbar";
import ServiceCard from "./components/service/ServiceCard";
import services from "./components/service/service-data";
import AboutCard from "./components/about/AboutCard";
import aboutData from "./components/about/aboutData";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="font-sans">
        {/* Header with Navbar */}
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b bg-blue-50 pt-20">
          {/* Home Section */}
          <section id="home" className="mt-10 mb-15 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome to MySite
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              A simple one-page website built with React, React Icons, and
              smooth scrolling navigation.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-16 bg-white">
            <h2 className="text-2xl font-bold mb-10 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-sm text-left px-4">
              {aboutData.map((item, index) => (
                <AboutCard
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 ">
            <h2 className="text-2xl font-bold mb-10 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-blue-600 py-16 text-white w-full">
            <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="flex justify-center px-4">
              <div className="bg-white p-6 md:p-10 rounded shadow text-left text-black w-full max-w-md">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
