import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md text-left">
      <Icon className="text-blue-600 text-2xl mb-4" />
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
