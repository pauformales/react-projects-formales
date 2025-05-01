import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Banner from "./Banner";
import YtSection from "./YtSection";
import Benefits from "./Benefits";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Scholarship from "./Scholarship";
import MapSection from "./MapSection";
import PartnersSection from "./PartnersSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <Navigation isOpen={isOpen} toggleMenu={toggleMenu} />
      <Banner />
      <YtSection />
      <Benefits />
      <Testimonial />
      <Scholarship />
      <MapSection />
      <PartnersSection />
      <Footer />
    </>
  );
};

export default Home;
