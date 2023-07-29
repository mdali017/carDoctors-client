import React from "react";

const SectionTitle = ({ title, heading, para }) => {
  return (
    <div className="text-center mt-20 mb-20">
      <h3 className="text-xl text-orange-600 font-bold  ">{title}</h3>
      <h1 className="text-4xl font-bold mb-4">{heading}</h1>
      <p className="lg:w-[700px] mx-auto">{para}</p>
    </div>
  );
};

export default SectionTitle;
