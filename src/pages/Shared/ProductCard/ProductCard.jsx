import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBeer,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  //   console.log(product, 4);
  const { _id, image_url, title, price, rating } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="w-[186px] h-[147px] mx-auto bg-gray-300">
        <img src={image_url} alt="car instruments" />
      </figure>
      <div className="card-body ">
        <div className="mx-auto">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-orange-600"></FaStar>}
            readonly
            fullSymbol={<FaStar className="text-orange-600"></FaStar>}
          />
        </div>
        <h2 className="text-2xl font-semibold text-center ">{title}</h2>
        <p className="text-center">
          Price: <span className="text-orange-500 font-semibold">${price}</span>
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">
            Details<FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
