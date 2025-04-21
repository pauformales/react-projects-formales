import React from "react";
import SponsorSection from "./SponsorSection";
import Gifts from "../about/Gifts";
import Footer from "../home/Footer";
import Header from "../home/Header";
import Navigation from "../home/Navigation";

const Sponsor = () => {
  return (
    <>
      <Header />
      <Navigation />
      <SponsorSection />
      <Gifts />
      <Footer />
    </>
  );
};

export default Sponsor;
