import React from "react";
import "./productBox.css";

const ProductBox = ({ products, active }) => {
  // console.log(products);
  return (
    <div className={active ? "product-box" : "product-box-grid"}>
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
            <div key={id} className="product-container">
              {active ? (
                <div>
                  <img className="pic" alt="pic" src={image} />
                  <div className="product-description">
                    <h4 className="product-name">{name}</h4>
                    <h4 className="product-price">
                      $
                      {price
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="grid-container">
                  <img className="grid-pic" alt="pic" src={image} />
                  <div className="product-description-grid">
                    <div className="grid-header">
                      <h4 className="grid-product-name">{name}</h4>
                      <h4 className="grid-product-price">
                        $
                        {price
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                      </h4>
                    </div>
                    <h4 className="product-text">{description}</h4>
                    <button className="details">Details</button>
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
