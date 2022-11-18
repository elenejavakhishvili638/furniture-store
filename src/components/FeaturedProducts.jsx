import React, { useEffect } from "react";
import "./featuredProducts.css";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product_context";
import { BiSearchAlt2 } from "react-icons/bi";
import { single_product_url } from "../utils/products";
// import { useProductContext } from "../context/product_context";

const FeaturedProducts = () => {
  const { featuredProducts, fetchSingleProduct, single_product } =
    useProductContext();
  const navigate = useNavigate();
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
                <div className="featured-product-image">
                  <img alt="pic" src={image} />
                  <div className="hover-icon">
                    <Link
                      to={`/product/${id}`}
                      state={{ product }}
                      className="search-icon"
                    >
                      <BiSearchAlt2 />
                    </Link>
                    {/* <span
                      className="search-icon"
                      onClick={() => {
                        fetchSingleProduct(`${single_product_url}${id}`);
                        navigate(`/product/${id}`);
                      }}
                    >
                      <BiSearchAlt2 />
                    </span> */}
                  </div>
                </div>
                <div className="fetured-product-description">
                  <h5 className="featured-name">{name}</h5>
                  <h5 className="featured-price">
                    $
                    {price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </h5>
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
