import React from "react";
import Hero from "../components/Hero";
import "./home.css";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts />
      <Services />
    </div>
  );
};

export default Home;
