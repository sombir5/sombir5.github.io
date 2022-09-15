import React from "react";
import sombir from "../images/sombir2.jpeg";
import Skills from "./skills";
import Resume from "../images/Resume.pdf";
import Projects from "./projects";
import Contacts from "./footer";
import "../css/introduction.css";

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
          <div className="download">
            <a href={Resume} target="_blank">
              <div>CV</div>
            </a>
          </div>
        </div>
        <div className="pic">
          <img className="image" src={sombir} alt="sombir" />
          <div className="stats">
            <a
              href="https://github.com/sombir5?tab=repositories"
              title="Profile"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=sombir5&show_icons=true&custom_title=My%20GitHub%20Stats&border_radius=0"
                alt="Github Stats"
              />
            </a>
            <a
              href="https://github.com/sombir5?tab=repositories"
              title="Profile"
            >
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=sombir5&border_radius=0"
                alt="sombir5"
              />
            </a>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};
export default Introduction;
