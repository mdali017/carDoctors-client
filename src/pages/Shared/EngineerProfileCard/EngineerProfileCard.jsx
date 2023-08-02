import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const EngineerProfileCard = ({ engineer }) => {
  console.log(engineer, 4);
  const { profile_image_url, name, passion } = engineer;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={profile_image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-xl font-semibold">{passion}</p>
        <div className="card-actions mt-5">
          <FaFacebookSquare className="text-[30px]"></FaFacebookSquare>
          <FaTwitterSquare className="text-[30px]"></FaTwitterSquare>
          <FaLinkedin className="text-[30px]"></FaLinkedin>
          <FaInstagramSquare className="text-[30px]"></FaInstagramSquare>
        </div>
      </div>
    </div>
  );
};

export default EngineerProfileCard;
