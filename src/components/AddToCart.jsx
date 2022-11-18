import React from "react";

const AddToCart = ({ single_product }) => {
  const { colors } = single_product;
  return (
    <div className="add-to-cart-container">
      <div className="choose-color">
        <p>Colors:</p>
        {colors && colors.map((color, index) => <p key={index}>{color}</p>)}
      </div>
      <div className="choose-amount">
        <button>-</button>1<button>+</button>
      </div>
    </div>
  );
};

export default AddToCart;
