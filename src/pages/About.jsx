import React from "react";
import Banner from "../components/Banner";
import "./about.css";
import Desk from "../images/hero-bcg.jpeg";

const About = () => {
  return (
    <div className="about">
      <Banner pageOne="About" />
      <div className="about-content">
        <img src={Desk} alt="pic" />
        <div>
          <h2>our story</h2>
          <div className="underline"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
