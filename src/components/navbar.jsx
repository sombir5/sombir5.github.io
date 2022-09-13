import React from "react";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="char">S</div>
      <div className="sub-nav">
        <div>
          <a href="#intro">About</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#contacts">Contacts</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
