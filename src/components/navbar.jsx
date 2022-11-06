import React from "react";
import {Link } from "react-router-dom";
import "../css/navbar.css";
import Resume from "../images/Resume.pdf";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="char">S</div>
      <div className="sub-nav">
        {/* <div> */}
          <a href="#intro">About</a>
        {/* </div> */}
        {/* <div> */}
          <a href="#stats">Stats</a>
        {/* </div> */}
        {/* <div> */}
          <a href="#skills">Tech&nbsp;stacks</a>
        {/* </div> */}
        {/* <div> */}
          <a href="#projects">Projects</a>
        {/* </div> */}
        {/* <div> */}
          <a href="#contacts">Contacts</a>
        {/* </div> */}
        {/* <div> */}
          <a href={Resume} target="_blank" download="Sombir_Resume">
            Resume
          </a>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
