import React from "react";

const Slider = ({ img }) => {
  return (
    <div>
      <div className="bg-gray-900 ">
        <img src={img} className="w-full opacity-50" />
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 md:bottom-[-100px] lg:bottom-[100px] ">
        <div className="text-white w-1/2">
          <h2 className="text-2xl md:text-6xl font-bold mb-4">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-sm md:mb-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            eius enim hic saepe voluptatum soluta, quia dolorem amet laboriosam
            recusandae tenetur dolor fugit deleniti possimus!
          </p>
          <div>
            <button className="btn btn-primary mr-6">Discover More</button>
            <button className="btn btn-outline btn-warning">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
