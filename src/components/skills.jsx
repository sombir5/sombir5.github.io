import React from "react";
import html from "../images/html5.png";
import css from "../images/css3.png";
import js from "../images/javascript.png";
import react from "../images/react-native.png";
import git from "../images/github.png";
import node from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import npm from "../images/npm.png";
import "../css/skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="skill-head">Tech Stacks</h1>
      <div className="sub-skill">
        <div className="skillSet1">
          <div style={{backgroundColor:"white"}}>
            <img src={html} alt="HTML" />
          </div>
          <div style={{backgroundColor:"white"}}>
            <img src={css} alt="CSS" />
          </div>
          <div style={{backgroundColor:"white"}}>
            <img src={js} alt="JS" />
          </div>
          <div style={{backgroundColor:"white"}}>
            <img src={react} alt="REACT" />
          </div>
          <div style={{backgroundColor:"white"}}>
            <img src={npm} alt="NPM" />
          </div>
        </div>
        <div className="skillSet2">
          {/* <div>
            <img src={mern} alt="MERN" />
          </div> */}
          <div style={{ backgroundColor: "white" }}>
            <img src={mongodb} alt="MONGODB" />
          </div>
          <div style={{ backgroundColor: "white" }}>
            <img src={git} alt="GITHUB" />
          </div>
          <div style={{ backgroundColor: "white" }}>
            <img src={node} alt="NODEJS" />
          </div>
        </div>
      </div>
      <div className="skill-head">
        <h1>Skills</h1>
        <div className="d-skill">
          <p>
            FrontEnd Development || Backend Development || Communication Skills
            || Data Structures and Algorithm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
