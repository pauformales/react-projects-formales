import React from "react";

const ServiceCard = ({ img, icon, title, description }) => {
  return (
    <div className="flex items-center bg-[#F2F2F2] p-6 w-full h-[380px]">
      <img
        src={img}
        alt={title}
        className="w-[346px] h-[346px] object-cover mr-8"
      />
      <div className="flex flex-col justify-center -mt-10 ml-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-lime  w-6 h-6">{icon}</span>
          <h3 className="text-lime font-raleway text-3xl font-semibold">
            {title}
          </h3>
        </div>
        <p className=" text-base font-raleway leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
