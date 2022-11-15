import React from "react";
import { FaBars } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import "./productsList.css";
import ProductBox from "./ProductBox";

const ProductsList = ({ isActive, setIsActive, products }) => {
  return (
    <div className="products-list">
      <div className="product-list-header">
        <div className="btn-icons">
          <button className="active-btn bar">
            <FaBars />
          </button>
          <button className="inactive-btn grid">
            <BsFillGridFill />
          </button>
        </div>
        <p>{products.length} Products Found</p>
        <hr />
        <div className="section">
          <div className="sortby">
            <p>Sort By</p>
            <div className="dropdown-price">
              <div
                className="dropdown-btn-price"
                onClick={() => setIsActive(!isActive)}
              >
                <span>Price (Lowest)</span>
                <i className={isActive ? "arrow up" : "arrow down"} />
              </div>
              {isActive && (
                <div className="dropdown-content-price">
                  <button>Price (Lowest)</button>
                  <button>Price (Highest)</button>
                  <button>Name (A - Z)</button>
                  <button>Name (Z - A)</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="product-list-wrap">
        <ProductBox products={products} />
      </div>
    </div>
  );
};

export default ProductsList;
