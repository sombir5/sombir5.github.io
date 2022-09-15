import React from "react";
import "../css/projects.css";
import bluefly from "../images/Bluefly.png";
import bitrix from "../images/Bitrix24.png";

const projects = () => {
  return (
    <div id="projects">
      <h1 className="projects-head">Projects</h1>
      <div className="detail">
        <div className="p-img">
          <a href="https://sombir5.github.io/Bluefly-Clone" target="_blank">
            <img className="p-shot" src={bluefly} alt="Bluefly" />
          </a>
        </div>
        <div className="p-detail">
          <h2>Title: Bluefly-Clone</h2>
          <h3>Type:Group Project</h3>
          <h3>Contribution: Cart Page</h3>
          <h3>CSS || HTML || Vanilla JS</h3>
          <div>
            <a href="https://sombir5.github.io/Bluefly-Clone" target="_blank">
              <div className="button">Deploy</div>
            </a>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="p-img">
          <a
            href="https://sombir5.github.io/affable-limit-5459"
            target="_blank"
          >
            <img className="p-shot" src={bitrix} alt="Bitrix24" />
          </a>
        </div>
        <div className="p-detail">
          <h2>Title: Bitrix24-Clone</h2>
          <h3>Type:Group Project</h3>
          <h3>Contribution: Tools and Pricing Page</h3>
          <h3>CSS || HTML || Vanilla JS</h3>
          <div>
            <a
              href="https://sombir5.github.io/affable-limit-5459"
              target="_blank"
            >
              <div className="button">Deploy</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
