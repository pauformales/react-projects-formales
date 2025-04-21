import React from "react";

import GivingOptions from "./GivingOptions";
import Gifts from "../about/Gifts";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Navigation from "../home/Navigation";

const Donate = () => {
  return (
    <>
      <Header />
      <Navigation />
      <GivingOptions />
      <Gifts />
      <Footer />
    </>
  );
};

export default Donate;
