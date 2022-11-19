import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import "./productBox.css";

const ProductBox = ({ products, active }) => {
  return (
    <div className={active ? "product-box" : "product-box-grid"}>
      {products &&
        products.map((product) => {
          const { id, name, price, image, description } = product;
          return (
            <div key={id} className="product-container">
              {active ? (
                <div>
                  <div className="hover-over-product">
                    <img className="pic" alt="pic" src={image} />
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
                  <div className="product-description">
                    <h4 className="product-name">{name}</h4>
                    <h4 className="product-price">${price / 100}</h4>
                  </div>
                </div>
              ) : (
                <div className="grid-container">
                  <div className="hover-over-product-grid">
                    <img className="grid-pic" alt="pic" src={image} />
                    <div className="hover-icon-grid">
                      <Link
                        to={`/product/${id}`}
                        state={{ product }}
                        className="search-icon"
                      >
                        <BiSearchAlt2 />
                      </Link>
                    </div>
                  </div>
                  <div className="product-description-grid">
                    <div className="grid-header">
                      <h4 className="grid-product-name">{name}</h4>
                      <h4 className="grid-product-price">${price / 100}</h4>
                    </div>
                    <h4 className="product-text">{description}</h4>
                    <Link
                      to={`/product/${id}`}
                      state={{ product }}
                      className="details"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ProductBox;
