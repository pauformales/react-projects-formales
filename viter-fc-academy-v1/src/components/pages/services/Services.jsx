import React from "react";

import Regular from "./Regular";
import CardServices from "./CardServices";
import Volunteer from "./Volunteer";
import Header from "../../partials/Header";
import Navigation from "../../partials/Navigation";
import Footer from "../../partials/Footer";

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
