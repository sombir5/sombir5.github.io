import React from "react";
import sombir from "../images/sombir2.jpeg";
import Skills from "./skills";
import Resume from "../images/Resume.pdf";
import Projects from "./projects";
import Contacts from "./footer";
import "../css/introduction.css";
import Stats from "./stats";

const Introduction = () => {
  return (
    <div id="intro">
      <div className="m-intro">
        <div className="sub-intro">
          <h3>Hi, my name is</h3>
          <h1>Sombir</h1>
          <p>
            I am a Full-stack developer with good knowledge of JavaScript, HTML,
            CSS, React, MERN and a 1000 hours of coding practice. Looking at
            joining a challenging work environment where I can develop a deeper
            understanding of web development.
          </p>

          <a
            className="download"
            href={Resume}
            target="_blank"
            download="Sombir_Resume"
          >
            {/* <div className="download">Download CV</div> */}
            Download CV
          </a>

          <a className="download2" href={Resume} target="_blank">
            {/* <div id="stats" className="download2">
              View CV
            </div> */}
            View CV
          </a>
        </div>
        <div className="pic">
          <img className="image" src={sombir} alt="sombir" />
        </div>
      </div>
      <Stats />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};
export default Introduction;
