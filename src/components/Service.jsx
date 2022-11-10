import React from "react";
import { services } from "../utils/products";
import "./service.css";

const Service = () => {
  return (
    <div className="service-container">
      {services.map((service) => {
        const { id, icon, title, text } = service;
        return (
          <div key={id} className="service">
            <span className="icon">{icon}</span>
            <h3 className="service-title">{title}</h3>
            <p className="service-text">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
