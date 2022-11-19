import React from "react";
import "./imageDescription.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ImageDescription = ({ single_product }) => {
  const { id, stock, price, reviews, stars, name, description, company } =
    single_product;

  const tempStars = Array.from({ length: 5 }, (char, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="image_container">
      <h2>{name}</h2>
      <div className="stars">
        {tempStars}
        <p>({reviews} customer reviews)</p>
      </div>
      <h5>$ {price && price / 100}</h5>
      <p>{description}</p>
      <div className="info-wrap">
        <p>
          <span>available:</span> {stock ? "In Stock" : "Out Of Stock"}
        </p>
        <p>
          <span style={{ textTransform: "uppercase" }}>sku:</span> {id}
        </p>
        <p>
          <span>brand:</span> {company}
        </p>
      </div>
      <hr className="product-hr" />
    </div>
  );
};

export default ImageDescription;
