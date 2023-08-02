import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import HotSection from "../HotSection/HotSection";
import PopularProducts from "../PopularProducts/PopularProducts";
import TeamSection from "../TeamSection/TeamSection";
import CoreFeature from "../CoreFeature/CoreFeature";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <HotSection></HotSection>
      <PopularProducts></PopularProducts>
      <TeamSection></TeamSection>
      <CoreFeature></CoreFeature>
      <h1>Home Module: 71-7 video</h1>
    </div>
  );
};

export default Home;
