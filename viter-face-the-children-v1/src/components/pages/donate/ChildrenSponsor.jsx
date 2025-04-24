import React from "react";
import Header from "../home/Header";
import Navigation from "../home/Navigation";
import Footer from "../home/Footer";
import Gifts from "../about/Gifts";
import givingOptions from "./DonateData";
import { useNavigate } from "react-router-dom";

const ChildrenSponsor = () => {
  const navigate = useNavigate();

  const childrenSponsor = givingOptions.find(
    (option) => option.title === "Children Sponsorship"
  );

  if (!childrenSponsor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Error: Sponsor data not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-[100px] px-4 py-12 mb-[100px] flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[275px] ">
            <img
              src={childrenSponsor.image}
              alt="Children Sponsorship"
              className="lg:w-full lg:h-full mx-auto object-cover"
            />
          </div>
          <div className="flex-1 mt-10 text-[#3a3b36]">
            <h1 className="text-lg font-semibold mb-5">
              {childrenSponsor.title}
            </h1>
            <div className="h-[1px] w-full bg-gray-400 opacity-15 mb-4"></div>
            <p className="text-sm leading-relaxed mb-6">
              {childrenSponsor.description}
            </p>
            <button
              onClick={() => navigate("/sponsor")}
              className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Sponsor Now
            </button>
          </div>
        </div>
      </main>
      <Gifts />
      <Footer />
    </div>
  );
};

export default ChildrenSponsor;
