import React, { useState } from "react";
import FAQMenu from "./FAQMenu";
import FAQContent from "./FAQContent";
import Header from "../../partials/Header";
import Navigation from "../../partials/Navigation";
import Footer from "../../partials/Footer";

const FAQPage = () => {
  const [selected, setSelected] = useState("About Our School");

  return (
    <>
      <Header />
      <Navigation />
      <div className="px-4 py-12 max-w-[1500px] mx-auto font-raleway">
        <h2 className="text-[80px] font-thin text-center mb-20 mt-10">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="md:w-1/4">
            <FAQMenu selected={selected} onSelect={setSelected} />
          </aside>
          <main className="md:w-3/4">
            <FAQContent selected={selected} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
