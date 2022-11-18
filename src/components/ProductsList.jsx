import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import "./productsList.css";
import ProductBox from "./ProductBox";
import { useFilterContext } from "../context/filter_context";

const ProductsList = ({ isActive, setIsActive, products }) => {
  const { sort_by, changePrice, sortBy } = useFilterContext();
  const [active, setActive] = useState(true);

  // console.log(filtered_products);

  const price = [
    "Price (Lowest)",
    "Price (Highest)",
    "Name (A - Z)",
    "Name (Z - A)",
  ];

  return (
    <div className="products-list">
      <div className="product-list-header">
        <div className="btn-icons">
          <button
            className={active ? "active-btn bar" : "inactive-btn bar"}
            onClick={() => {
              setActive(true);
            }}
          >
            <BsFillGridFill />
          </button>
          <button
            className={!active ? "active-btn grid" : "inactive-btn grid"}
            onClick={() => {
              setActive(false);
            }}
          >
            <FaBars />
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
                <span>{sort_by}</span>
                <i className={isActive ? "arrow up" : "arrow down"} />
              </div>
              {isActive && (
                <div className="dropdown-content-price">
                  {price.map((item, index) => {
                    return (
                      <button
                        key={index}
                        name="sort_by"
                        onClick={(event) => {
                          sortBy(event);
                          changePrice(item);
                          setIsActive(!isActive);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="product-list-wrap">
        <ProductBox products={products} active={active} />
      </div>
    </div>
  );
};

export default ProductsList;
