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
          <label>Title: Harvest-Clone</label><br />
          <label>
            Harvest is a time-tracking app for freelancers that includes
            invoicing, expensing, and team management features.
          </label><br />
          <label>Type:Group Project</label><br />
          <label>Contribution: Customer Page and Expenses Page</label><br />
          <label>CSS || HTML || Vanilla JS || React JS || Redux || Chakra UI </label><br />
          <div className="m-button">
            <div>
              <a
                className="button"
                href="https://myharvest2.netlify.app/"
                target="_blank"
              >
                {/* <div className="button">Deploy</div> */}
                Deploy
              </a>
            </div>
            <div>
              <a
                className="button"
                href="https://github.com/shabazalimalik69/afraid-shoe-4639"
                target="_blank"
              >
                {/* <div className="button">GitHub</div> */}
                GitHub
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
          <label>Title: Bluefly-Clone</label><br />
          <label>
            Bluefly is the online shopping destination for the style obsessed,
            shop designer styles from Prada, Gucci, Dior, Valentino.
          </label><br />
          <label>Type:Group Project</label><br />
          <label>Contribution: Cart Page</label><br />
          <label>CSS || HTML || Vanilla JS</label><br />
          <div className="m-button">
            <div>
              <a
                className="button"
                href="https://sombir5.github.io/Bluefly-Clone"
                target="_blank"
              >
                {/* <div className="button">Deploy</div> */}
                Deploy
              </a>
            </div>
            <div>
              <a
                className="button"
                href="https://github.com/sombir5/Bluefly-Clone"
                target="_blank"
              >
                {/* <div className="button">GitHub</div> */}
                GitHub
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
          <label>Title: Bitrix24-Clone</label><br />
          <label>
            Being a highly versatile product, Bitrix24 can be used by a wide
            variety of teams to achieve outstanding results
          </label><br />
          <label>Type:Group Project</label><br />
          <label>Contribution: Tools and Pricing Page</label><br />
          <label>CSS || HTML || Vanilla JS</label><br />
          <div className="m-button">
            <div>
              <a
                className="button"
                href="https://sombir5.github.io/affable-limit-5459"
                target="_blank"
              >
                {/* <div className="button">Deploy</div> */}
                Deploy
              </a>
            </div>
            <div>
              <a
                className="button"
                href="https://github.com/sombir5/affable-limit-5459"
                target="_blank"
              >
                {/* <div className="button">GitHub</div> */}
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
