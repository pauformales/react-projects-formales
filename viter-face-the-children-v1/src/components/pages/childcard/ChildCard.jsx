// components/pages/childcard/ChildCard.jsx

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ChildCard({ img, name, percent }) {
  return (
    <div className="bg-white overflow-hidden w-full mx-auto max-w-[280px]">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-white p-3">
          <h3 className="text-[16px]">{name}</h3>
          <div className="flex justify-between items-center">
            <Link
              to={`/children-info/${name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[#fc9827]"
            >
              View Info
            </Link>
            <button className="flex items-center gap-1 bg-primary rounded-md text-white px-3 py-2 text-xs hover:bg-[#2877a4] transition">
              <span>Sponsor</span> <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div
        className="h-8 w-full relative"
        style={{
          background: `linear-gradient(to right, #eb8500 ${percent}%, #ffbd66 ${percent}%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start pl-3 text-white text-[15px] font-semibold">
          {percent}% Sponsored
        </div>
      </div>
    </div>
  );
}
