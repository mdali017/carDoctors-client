import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import { FaArrowRight } from "react-icons/fa";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-new-mdali017.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const popularProducts = data.slice(0, 6);
        setProducts(popularProducts);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        title="Popular Products"
        heading="Browse Our Products"
        para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-warning ">
          See More <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
