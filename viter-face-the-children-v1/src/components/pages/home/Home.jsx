import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Stats from "./Stats";
import Services from "./Services";
import Affiliates from "./Affiliates";
import Footer from "./Footer";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Banner />
        <Stats />
        <Services />
        <Affiliates />
        <Footer />
      </div>
    </>
  );
};

export default Home;
