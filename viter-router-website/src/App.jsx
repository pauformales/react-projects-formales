import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="font-sans">
        {/* Header with Navbar */}
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 text-center px-4">
          <section id="home" className="mt-10">
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
          <section id="about" className="py-16 text-center px-4 bg-white">
            <h2 className="text-2xl font-bold mb-10">About Us</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-sm text-left">
              <div>
                <h3 className="font-bold mb-2 text-lg">Our Story</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
                  vehicula.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-lg">Our Mission</h3>
                <p>
                  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  Ut in nulla enim. Phasellus molestie magna non est bibendum
                  non venenatis nisl tempor.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="bg-gray-50 py-16 text-center px-4">
            <h2 className="text-2xl font-bold mb-10">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded shadow-md text-left">
                <FaGithub className="text-blue-600 text-2xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">Web Development</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-md text-left">
                <FaTwitter className="text-blue-600 text-2xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow-md text-left">
                <FaLinkedin className="text-blue-600 text-2xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">
                  Digital Marketing
                </h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section
            id="contact"
            className="bg-blue-600 py-16 text-white text-center px-4"
          >
            <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
            <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-left text-black">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea className="w-full px-4 py-2 border border-gray-300 rounded h-24 focus:outline-none"></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white w-full py-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="#" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
        <p>© 2025 MySite. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
