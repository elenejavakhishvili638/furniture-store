import React from "react";
import Hero from "../components/Hero";
import "./home.css";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Newsletter />
    </div>
  );
};

export default Home;
