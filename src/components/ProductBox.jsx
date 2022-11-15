import React from "react";
import "./productBox.css";

const ProductBox = ({ products }) => {
  return (
    <div className="product-box">
      {products &&
        products.map((product) => {
          const {
            id,
            name,
            price,
            image,
            colors,
            company,
            description,
            category,
          } = product;
          return (
            <div className="product-container">
              <img alt="pic" src={image} />
              <div className="product-description">
                <h4 className="product-name">{name}</h4>
                <h4 className="product-price">${price}</h4>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductBox;
