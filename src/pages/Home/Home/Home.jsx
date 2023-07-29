import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import HotSection from "../HotSection/HotSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <HotSection></HotSection>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
