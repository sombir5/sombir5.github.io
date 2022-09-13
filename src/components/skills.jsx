import React from "react";
import html from "../images/html5.png";
import css from "../images/css3.png";
import js from "../images/javascript.png";
import react from "../images/react-native.png";
import git from "../images/github.png";
import node from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import npm from "../images/npm.png";
// import mern from "../images/mern.png";
const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skill-head">Skills</h1>
      <div className="sub-skill">
        <div className="skillSet1">
          <div>
            <img src={html} alt="HTML" />
          </div>
          <div>
            <img src={css} alt="CSS" />
          </div>
          <div>
            <img src={js} alt="JS" />
          </div>
          <div>
            <img src={react} alt="REACT" />
          </div>
          <div>
            <img src={git} alt="GITHUB" />
          </div>
        </div>
        <div className="skillSet2">
          {/* <div>
            <img src={mern} alt="MERN" />
          </div> */}
          <div>
            <img src={npm} alt="NPM" />
          </div>
          <div>
            <img src={mongodb} alt="MONGODB" />
          </div>
          <div>
            <img src={node} alt="NODEJS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
