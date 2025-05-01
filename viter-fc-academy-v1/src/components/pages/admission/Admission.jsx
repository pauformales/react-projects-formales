import React, { useState } from "react";
import AdmissionMenu from "./AdmissionMenu";
import AdmissionContent from "./AdmissionContent";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import Footer from "../home/Footer";

const Admission = () => {
  const [selected, setSelected] = useState("Playschool");

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-[1500px] mx-auto px-4 py-12 mb-[250px] font-raleway">
        <h1 className="text-[80px] font-thin text-center my-20">Admission</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left menu */}
          <div className="md:col-span-1">
            <AdmissionMenu selected={selected} onSelect={setSelected} />
          </div>

          {/* Right content */}
          <div className="md:col-span-3">
            <AdmissionContent selected={selected} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admission;
