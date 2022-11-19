import React from "react";
import "./featuredProducts.css";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/product_context";
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "./Loading";

const FeaturedProducts = () => {
  const { featuredProducts, loading } = useProductContext();

  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <hr />
      {loading ? (
        <Loading />
      ) : (
        <div className="featured-product-container">
          {featuredProducts &&
            featuredProducts.map((product) => {
              const { id, image, name, price } = product;
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
                    </div>
                  </div>
                  <div className="fetured-product-description">
                    <h5 className="featured-name">{name}</h5>
                    <h5 className="featured-price">${price / 100}</h5>
                  </div>
                </div>
              );
            })}
        </div>
      )}

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
