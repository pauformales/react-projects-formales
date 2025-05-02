import React from "react";
import Header from "../../partials/Header";
import Images from "./Images";
import Videos from "./Videos";
import Navigation from "../../partials/Navigation";
import Footer from "../../partials/Footer";

const Gallery = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Images />
      <Videos />
      <Footer />
    </div>
  );
};

export default Gallery;
