import React from "react";
import "./featuredProducts.css";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/product_context";

const FeaturedProducts = () => {
  const { featuredProducts } = useProductContext();
  // console.log(featuredProducts);
  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <hr />
      <div className="featured-product-container">
        {featuredProducts &&
          featuredProducts.map((product) => {
            const {
              category,
              colors,
              company,
              description,
              id,
              image,
              name,
              price,
              shipping,
            } = product;
            return (
              <div key={id} className="featured-product">
                <img alt="pic" src={image} />
                <div className="fetured-product-description">
                  <h5 className="featured-name">{name}</h5>
                  <h5 className="featured-price">${price}</h5>
                </div>
              </div>
            );
          })}
      </div>
      <div className="all-product-btn">
        <button className="all-products">
          <Link to="/products" className="all-product">
            all products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
