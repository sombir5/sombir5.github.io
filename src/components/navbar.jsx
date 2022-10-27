import React from "react";
import "../css/navbar.css";
import Resume from "../images/Resume.pdf";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="char">S</div>
      <h1 className="sub-nav-portfolio">Portfolio</h1>
      <div className="sub-nav">
        <div>
          <a href="#intro">About</a>
        </div>
        <div>
          <a href="#stats">Stats</a>
        </div>
        <div>
          <a href="#skills">Tech stacks</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#contacts">Contacts</a>
        </div>
        <div>
          <a href={Resume} target="_blank" download>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
