import React from "react";
import "./imageContainer.css";

const ImageContainer = ({ single_product, index, setIndex }) => {
  const { images } = single_product;

  return (
    <div className="product-image-container">
      <div className="main-image">
        <img src={images && images[index].url} alt="pic" />
      </div>
      <div className="image-list-container">
        {images &&
          images.map((image, val) => {
            return (
              <img
                key={val}
                src={image.url}
                alt="alt"
                className={
                  image.url === images[index].url
                    ? "image-list border"
                    : "image-list"
                }
                onClick={() => {
                  setIndex(val);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ImageContainer;
