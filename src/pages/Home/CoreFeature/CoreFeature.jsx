import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../../assets/icons/group.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/check.svg";
import img4 from "../../../assets/icons/Wrench.svg";
import img5 from "../../../assets/icons/person.svg";
import img6 from "../../../assets/icons/check.svg";

const CoreFeature = () => {
  return (
    <div>
      <SectionTitle
        title="Core Feature"
        heading="Why Choose Us"
        para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[900px] mx-auto gap-7 mb-20">
        <div className="border mx-auto p-6 rounded-lg ">
          <img src={img1} alt="" />
          <h3 className="text-gray-500 font-semibold ">Expert Team</h3>
        </div>
        <div className="border mx-auto p-6 rounded-lg">
          <img src={img2} alt="" />
          <h3 className="text-gray-500 font-semibold ">Timely Delivery</h3>
        </div>
        <div className="border mx-auto p-6 rounded-lg">
          <img src={img3} alt="" />
          <h3 className="text-gray-500 font-semibold ">Timely Delivery</h3>
        </div>
        <div className="border mx-auto p-6 rounded-lg">
          <img src={img4} alt="" />
          <h3 className="text-gray-500 font-semibold ">Best Equipment</h3>
        </div>
        <div className="border mx-auto p-6 rounded-lg">
          <img src={img5} alt="" />
          <h3 className="text-gray-500 font-semibold ">24/7 Support</h3>
        </div>
        <div className="border mx-auto p-6 rounded-lg">
          <img src={img6} alt="" />
          <h3>100% Guranty</h3>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
