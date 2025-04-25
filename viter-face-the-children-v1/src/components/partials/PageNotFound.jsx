import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileExcel, FaLongArrowAltLeft } from "react-icons/fa";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center pt-40 flex-col gap-2 p-4 h-screen bg-gradient-to-t from-white to-primary">
      <FaFileExcel className="h-80 w-80 fill-primary/40 absolute z-0 skew-x-12 skew-y-12" />

      <h3 className="text-8xl font-bold text-white z-10">404</h3>
      <h2 className="font-bold text-2xl text-white z-10">Page not found</h2>
      <p className="text-sm m-0 text-white z-10">
        Unfortunately, the desired page cannot be accessed at the moment.
      </p>
      <p className="text-white text-sm z-10">Please check your URL</p>

      <button
        type="button"
        onClick={goToHomePage}
        className="group flex items-center gap-2 bg-white z-10 py-2 px-6 rounded-md text-primary font-bold hover:gap-4 duration-200"
      >
        <FaLongArrowAltLeft className="transition-all duration-200" />
        <span className="text-[13px]">Go back</span>
      </button>
    </div>
  );
};

export default PageNotFound;
