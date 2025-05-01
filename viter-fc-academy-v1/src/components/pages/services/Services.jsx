import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import Regular from "./Regular";
import CardServices from "./CardServices";
import Volunteer from "./Volunteer";
import Navigation from "../home/Navigation";

const Services = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Regular />
      <CardServices />
      <Volunteer />
      <Footer />
    </div>
  );
};

export default Services;
