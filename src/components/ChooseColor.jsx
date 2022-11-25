import React, { useState } from "react";
import "./chooseColor.css";
import { ImCheckmark } from "react-icons/im";

const ChooseColor = ({ single_product, setColor }) => {
  const { colors } = single_product;
  const [select, setSelect] = useState(0);

  const handleColorClass = (index, color) => {
    if (select === index) {
      return "opacity";
    }
  };
  return (
    <div className="choose-color">
      <span>Colors:</span>
      <div className="choose-colors">
        {colors &&
          colors.map((color, index) => (
            <button
              style={{ background: color }}
              onClick={() => {
                setSelect(index);
                setColor(color);
              }}
              className={`chosen-color ${handleColorClass(index, color)}`}
              key={index}
            >
              {select === index && <ImCheckmark />}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ChooseColor;
