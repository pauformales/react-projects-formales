import React from "react";
import Header from "../home/Header";
import Questions from "./Questions";
import Navigation from "../home/Navigation";
import ContactForm from "./ContactForm";
import GiftsWhite from "./GiftsWhite";
import Footer from "../home/Footer";

const Faq = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Questions />
      <ContactForm />
      <GiftsWhite />
      <Footer />
    </>
  );
};

export default Faq;
