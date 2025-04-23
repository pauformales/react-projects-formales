import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../home/Header";
import Gifts from "../about/Gifts";
import Footer from "../home/Footer";
import Navigation from "../home/Navigation";
import { nonResidentData, residentData } from "./SponsorData";
import SponsorModal from "../../partials/modal/SponsorModal";

const ChildrenInfo = () => {
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const allChildren = [...residentData, ...nonResidentData];
  const child = allChildren.find((c) => c.id.toString() === id);

  if (!child) {
    return (
      <div className="text-center py-12 text-xl text-red-600">
        Child not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-[100px] px-4 py-12 mb-[100px] flex flex-col md:flex-row gap-8">
          {/* LEFT - IMAGE */}
          <div className="w-full md:w-[275px] relative">
            <img
              src={child.img}
              alt={child.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute -bottom-9 left-0 w-full text-white font-semibold text-[16px] px-4 py-2"
              style={{
                background: `linear-gradient(to right, #eb8500 ${child.sponsored}, #ffbd66 ${child.sponsored})`,
              }}
            >
              {child.sponsored} - Sponsored
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex-1 mt-10 text-[#3a3b36]">
            <h1 className="text-lg font-semibold mb-5">{child.name}</h1>
            <div className="h-[1px] w-full bg-gray-400 opacity-15 mb-4"></div>
            {child.age && (
              <p className="mb-1">
                <span>Age:</span> {child.age}
              </p>
            )}
            {child.birthday && (
              <p className="mb-4 ">
                <span>Birthday:</span> {child.birthday}
              </p>
            )}
            {child.story && (
              <div>
                <h2 className="text-md font-semibold mb-2">My Story</h2>
                <p className="text-text-[#3a3b36] whitespace-pre-line text-sm">
                  {child.story}
                </p>
              </div>
            )}
            <button
              onClick={openModal}
              className="mt-6 bg-primary text-white py-2 px-4 text-xs rounded-md hover:bg-blue-400"
            >
              Sponsor Now
            </button>
          </div>
        </div>
      </main>

      <Gifts />
      <Footer />

      {/* Sponsor Modal */}
      <SponsorModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedChild={child}
      />
    </div>
  );
};

export default ChildrenInfo;
