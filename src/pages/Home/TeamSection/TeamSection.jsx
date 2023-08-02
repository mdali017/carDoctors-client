import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import EngineerProfileCard from "../../Shared/EngineerProfileCard/EngineerProfileCard";

const TeamSection = () => {
  const [engineers, setEngineer] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-new-mdali017.vercel.app/engineer")
      .then((res) => res.json())
      .then((data) => {
        const topEngineer = data.slice(0, 3);
        setEngineer(topEngineer);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        title="Team"
        heading="Meet Our Team"
        para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:pl-10 md:pr-10">
        {engineers.map((engineer) => (
          <EngineerProfileCard
            key={engineer._id}
            engineer={engineer}
          ></EngineerProfileCard>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
