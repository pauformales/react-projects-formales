import React from "react";

import Transform from "./Transform";
import Vision from "./Vision";
import Missions from "./Missions";
import Gifts from "./Gifts";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Navigation from "../home/Navigation";

const About = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Transform />
      <Vision />
      <Missions />
      <Gifts />
      <Footer />
    </>
  );
};

export default About;
