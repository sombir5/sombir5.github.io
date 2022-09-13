import React from "react";
import sombir from "../images/sombir2.jpeg";
const Introduction = () => {
  return (
    <div className="intro">
      <div className="sub-intro">
        <h3>Hi, my name is</h3>
        <h1>Sombir</h1>
        <p>
          I am a Full-stack developer with good knowledge of JavaScript,
          <br /> HTML, CSS, React, MERN and a 1000 hours of coding practice.
          <br />
          Looking at joining a challenging work environment where
          <br /> I can develop a deeper understanding of web development.
        </p>
      </div>
      <div>
        <img className="image" src={sombir} alt="" />
      </div>
    </div>
  );
};
export default Introduction;
