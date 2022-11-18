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
      <h5>
        $ {price && price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </h5>
      <p>{description}</p>
      <p>available: {stock ? "In Stock" : "Out Of Stock"}</p>
      <p>SKU: {id}</p>
      <p>brand: {company}</p>
      <hr />
    </div>
  );
};

export default ImageDescription;
