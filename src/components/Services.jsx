import React from "react";
import Service from "./Service";
import "./services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <div className="services-title">
          <h3>
            Custom Furniture <br /> Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        {/* <div className="service-wrap">  </div> */}
        <Service />
      </div>
    </div>
  );
};

export default Services;
