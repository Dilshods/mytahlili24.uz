import React from "react";
import Discover from "./discover/Discover";
import Hero from "./hero/Hero";
import Homes from "../singlePage/mainContent/homes/Home";

const Homepages = () => {
  return (
    <>
      <Hero />
      <Homes />
      <Discover />
    </>
  );
};

export default Homepages;
