import React, { useState } from "react";
import "./aside.css";
import { useFilterContext } from "../context/filter_context";
import { ImCheckmark } from "react-icons/im";

const Aside = ({ isActive, setIsActive }) => {
  const { filter, changeCompany, filterBy, clearFilters } = useFilterContext();

  const [selected, setSelected] = useState(0);
  const [select, setSelect] = useState(0);
  // console.log(filter.company);
  const category = [
    "all",
    "office",
    "living room",
    "kitchen",
    "bedroom",
    "dining",
    "kids",
  ];

  const company = ["all", "marcos", "liddy", "caressa"];

  const colors = ["all", "#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"];
  // console.log(colors);

  const handleClass = (index) => {
    if (selected === index) {
      return "line";
    }
  };

  const handleColorClass = (index, color) => {
    if (select === index) {
      if (color === "all") {
        return "line";
      } else {
        return "opacity";
      }
    }
  };

  return (
    <aside className="products-aside">
      <input type="text" placeholder="Search" />
      <h3>category</h3>
      <div className="category">
        {category.map((item, index) => {
          return (
            <button
              key={index}
              name="category"
              onClick={(event) => {
                setSelected(index);
                filterBy(event);
              }}
              className={`${handleClass(index)}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="company">
        <h3>company</h3>
        <div className="dropdown">
          <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
            <span>{filter && filter.company}</span>
            <i className={isActive ? "arrow up" : "arrow down"} />
          </div>
          {isActive && (
            <div className="dropdown-content">
              {company.map((item, index) => {
                return (
                  <button
                    key={index}
                    name="company"
                    onClick={(event) => {
                      filterBy(event);
                      changeCompany(event.target.textContent);
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
      <div className="colors">
        <h3>colors</h3>
        <div className="color-list">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                name="colors"
                data-color={color}
                onClick={(event) => {
                  setSelect(index);
                  // console.log("ttt");
                  filterBy(event);
                }}
                className={
                  color === "all"
                    ? `all-btn ${handleColorClass(index, color)}`
                    : `btn ${handleColorClass(index, color)}`
                }
                style={{ background: color }}
              >
                {color === "all" ? "all" : select === index && <ImCheckmark />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="price">
        <h3>price</h3>
        <input type="range" />
      </div>
      <div className="shipping">
        <label>free shipping</label>
        <input
          type="checkbox"
          name="shipping"
          // checked={}
          onChange={(event) => {
            filterBy(event);
            console.log(event.target.checked);
          }}
        />
      </div>
      <button
        className="clear-filters"
        onClick={() => {
          clearFilters();
        }}
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default Aside;
