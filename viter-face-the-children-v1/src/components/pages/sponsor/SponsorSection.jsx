import { useState } from "react";
import { residentData, nonResidentData } from "./SponsorData";
import { FaHouse, FaArrowRight } from "react-icons/fa6";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Link } from "react-router-dom";
import SponsorModal from "../../partials/modal/SponsorModal";

export default function SponsorSection() {
  const [activeTab, setActiveTab] = useState("resident");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);

  const currentData = activeTab === "resident" ? residentData : nonResidentData;

  const parsePercentage = (str) => parseFloat(str.replace("%", ""));

  const Card = ({ child }) => {
    const percentage = parsePercentage(child.sponsored);

    const openModal = () => {
      setSelectedChild(child);
      setIsModalOpen(true);
    };

    return (
      <div className="bg-white overflow-hidden  w-full mx-auto max-w-[280px]">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={child.img}
            alt={child.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-white p-3">
            <h3 className="text-[16px] ">{child.name}</h3>
            <div className="flex justify-between items-center">
              <Link
                to={`/children-info/${child.id}`}
                className="text-sm text-[#fc9827]"
              >
                View Info
              </Link>
              <button
                onClick={openModal}
                className="flex items-center gap-1 bg-primary rounded-md text-white px-3 py-2 text-xs hover:bg-[#2877a4] transition"
              >
                <span>Sponsor</span> <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div
          className="h-8 w-full relative"
          style={{
            background: `linear-gradient(to right, #eb8500 ${percentage}%, #ffbd66 ${percentage}%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-start pl-3 text-white text-[15px] font-semibold">
            {child.sponsored} Sponsored
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 mt-[150px]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col min-h-screen items-center gap-12 justify-center">
        <div className="flex justify-center gap-8 mb-2 text-[15px] font-semibold">
          <button
            onClick={() => setActiveTab("resident")}
            className={`flex items-center gap-2 ${
              activeTab === "resident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <FaHouse /> Resident
          </button>
          <button
            onClick={() => setActiveTab("nonResident")}
            className={`flex items-center gap-2 ${
              activeTab === "nonResident"
                ? "text-gray-600 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            <MdOutlineFamilyRestroom /> Non-Resident
          </button>
        </div>


        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {activeTab === "resident"
                ? currentData.map((child, index, arr) => {
                    const isLast = index === arr.length - 1;
                    const isUnevenInLg = arr.length % 4 === 1;

                    if (isLast && isUnevenInLg) {
                      return (
                        <div
                          key={child.id}
                          className="lg:col-span-4 flex justify-center"
                        >
                          <Card child={child} />
                        </div>
                      );
                    }

                    return <Card key={child.id} child={child} />;
                  })
                : currentData
                    .slice(0, 8)
                    .map((child) => <Card key={child.id} child={child} />)}
            </div>

            {activeTab === "nonResident" && currentData.length > 8 && (
              <div className="flex justify-center gap-6 mt-6">
                {currentData.slice(8, 11).map((child) => (
                  <div key={child.id} className="w-full max-w-[260px]">
                    <Card child={child} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <SponsorModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        selectedChild={selectedChild}
      />
    </section>
  );
}
