import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const HotSection = () => {
  return (
    <div className="bg-black md:w-[1000px] mx-auto mt-20 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="text-white flex p-10 justify-center  gap-5">
          <div>
            <FaCalendarAlt></FaCalendarAlt>
          </div>
          <div>
            <p className="">We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="text-white flex p-10 justify-center  gap-5">
          <div>
            <FaPhoneAlt></FaPhoneAlt>
          </div>
          <div>
            <p>We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div
          className="text
        -white flex p-10 justify-center  gap-5"
        >
          <div>
            <FaMapMarkerAlt></FaMapMarkerAlt>
          </div>
          <div>
            <p>We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
      </div>
      <h1>HotSection</h1>
    </div>
  );
};

export default HotSection;
