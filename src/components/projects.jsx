import React from "react";
import "../css/projects.css";
import harvest from "../images/harvest.png";
import bluefly from "../images/Bluefly.png";
import bitrix from "../images/Bitrix24.png";

const projects = () => {
  return (
    <div id="projects">
      <h1 className="projects-head">Projects</h1>
      <div className="detail">
        <div className="p-img">
          <a href="https://myharvest2.netlify.app/" target="_blank">
            <img className="p-shot" src={harvest} alt="harvest" />
          </a>
        </div>
        <div className="p-detail">
          <h2>Title: Harvest-Clone</h2>
          <p>
            Harvest is a time-tracking app for freelancers that includes
            invoicing, expensing, and team management features. It's an
            excellent tool for individuals and small organizations that need
            help with all those aspects of their businesses
          </p>
          <h3>Type:Group Project</h3>
          <h3>Contribution: Cart Page</h3>
          <h3>CSS || HTML || Vanilla JS || React JS || Redux || Chakra UI </h3>
          <div className="m-button">
            <div>
              <a href="https://myharvest2.netlify.app/" target="_blank">
                <div className="button">Deploy</div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/shabazalimalik69/afraid-shoe-4639"
                target="_blank"
              >
                <div className="button">GitHub</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="p-img">
          <a href="https://sombir5.github.io/Bluefly-Clone" target="_blank">
            <img className="p-shot" src={bluefly} alt="Bluefly" />
          </a>
        </div>
        <div className="p-detail">
          <h2>Title: Bluefly-Clone</h2>
          <p>
            Bluefly is the online shopping destination for the style obsessed,
            shop designer styles from Prada, Gucci, Dior, Valentino.
          </p>
          <h3>Type:Group Project</h3>
          <h3>Contribution: Cart Page</h3>
          <h3>CSS || HTML || Vanilla JS</h3>
          <div className="m-button">
            <div>
              <a href="https://sombir5.github.io/Bluefly-Clone" target="_blank">
                <div className="button">Deploy</div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/sombir5/Bluefly-Clone"
                target="_blank"
              >
                <div className="button">GitHub</div>
              </a>
            </div>
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
          <p>
            Bitrix24 is an online workspace.Being a highly versatile product,
            Bitrix24 can be used by a wide variety of teams to achieve
            outstanding results
          </p>
          <h3>Type:Group Project</h3>
          <h3>Contribution: Tools and Pricing Page</h3>
          <h3>CSS || HTML || Vanilla JS</h3>
          <div className="m-button">
            <div>
              <a
                href="https://sombir5.github.io/affable-limit-5459"
                target="_blank"
              >
                <div className="button">Deploy</div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/sombir5/affable-limit-5459"
                target="_blank"
              >
                <div className="button">GitHub</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
