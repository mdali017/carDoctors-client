import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  // console.log(service);
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between">
          <h4 className="text-orange-500 font-bold">Price: ${price}</h4>

          <Link to={`/checkout/${_id}`}>
            <div className="btn btn-primary">
              <FaArrowRight></FaArrowRight>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
