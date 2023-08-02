import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ServicesCard from "../../Shared/ServicesCard/ServicesCard";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-new-mdali017.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    <div>
      <SectionTitle
        title="Services"
        heading="Our Services"
        para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
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

export default Services;
