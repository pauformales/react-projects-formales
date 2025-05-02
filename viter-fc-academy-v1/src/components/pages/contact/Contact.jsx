import React from "react";
import Header from "../../partials/Header";
import Navigation from "../../partials/Navigation";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Footer from "../../partials/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <section className="contact lg:py-20 pt-32 pb-20 relative after:absolute after:content-[''] after:bg-[#f2f2f2] after:bottom-0 after:w-full after:h-[300px] after:-z-10 font-raleway">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">
          {/* Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <ContactInfo />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
