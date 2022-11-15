import React from "react";
import "./aside.css";

const Aside = ({ isActive, setIsActive }) => {
  return (
    <aside className="products-aside">
      <input type="text" placeholder="Search" />
      <div className="category">
        <h3>category</h3>
        <button>all</button>
        <button>office</button>
        <button>living room</button>
        <button>kitchen</button>
        <button>bedroom</button>
        <button>dining</button>
        <button
          onClick={(e) => {
            console.log(e.target.textContent);
          }}
          name="company"
        >
          kids
        </button>
      </div>
      <div className="company">
        <h3>company</h3>
        <div className="dropdown">
          <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
            <span>kk</span>
            <i className={isActive ? "arrow up" : "arrow down"} />
          </div>
          {isActive && (
            <div className="dropdown-content">
              <button>all</button>
              <button>marcos</button>
              <button>lidea</button>
              <button>caressa</button>
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
