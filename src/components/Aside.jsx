import React, { useState } from "react";
import "./aside.css";
import { useFilterContext } from "../context/filter_context";

const Aside = ({ isActive, setIsActive }) => {
  const { filter, changeCompany } = useFilterContext();
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

  const company = ["all", "marcos", "ldiea", "caressa"];

  const handleClass = (index) => {
    if (selected === index) {
      return "line";
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
              name="company"
              onClick={() => {
                setSelected(index);
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
            <span>{filter.company}</span>
            <i className={isActive ? "arrow up" : "arrow down"} />
          </div>
          {isActive && (
            <div className="dropdown-content">
              {company.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={(event) => {
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
          <button className="all-btn">all</button>
          <button className="btn" style={{ background: "#ff0000" }}></button>
          <button className="btn" style={{ background: "#00ff00" }}></button>
          <button className="btn" style={{ background: "#0000ff" }}></button>
          <button className="btn" style={{ background: "#000" }}></button>
          <button className="btn" style={{ background: "#ffb900" }}></button>
        </div>
      </div>
      <div className="price">
        <h3>price</h3>
        <input type="range" />
      </div>
      <div className="shipping">
        <label>free shipping</label>
        <input type="checkbox" />
      </div>
      <button className="clear-filters">Clear Filters</button>
    </aside>
  );
};

export default Aside;
