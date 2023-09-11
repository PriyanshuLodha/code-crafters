import React from "react";
import About from "./Aboutcompany";
import Cardcarousel from "./Cardcarousel";
import Carouselhome from "./Carouselhome";
import Contactus from "./Contactus";
const Home = () => {
  return (
    <>
      <Carouselhome />
      <About />
      <Cardcarousel />
      <Contactus />
    </>
  );
};

export default Home;
