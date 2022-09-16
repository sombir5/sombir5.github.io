import React from "react";
import github from "../images/github-icon.gif";
import mail from "../images/mail-icon.gif";
import linked from "../images/linkedin-icon.gif";
import "../css/footer.css";
const Footer = () => {
  return (
    <div id="contacts">
      <div className="h-line"></div>
      <div className="social">
        <div className="social-icon">
          <div>
            <a href="https://github.com/sombir5">
              <div>
                <img className="icon" src={github} alt="" />
              </div>
            </a>
          </div>
          <div>
            <a href="mailto:sombirverma5@gmail.com">
              <div>
                <img className="icon" src={mail} alt="" />
              </div>
            </a>
          </div>
          <div>
            <a href="linkedin.com/in/sombir5">
              <div>
                <img className="icon" src={linked} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
