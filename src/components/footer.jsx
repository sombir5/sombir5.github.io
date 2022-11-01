import React from "react";
import github from "../images/github-icon.gif";
import mail from "../images/mail-icon.gif";
import linked from "../images/linkedin-icon.gif";
import "../css/footer.css";
const Footer = () => {
  return (
    <div id="contacts">
      <h1 className="contact-head">Contact Me</h1>
      <div className="h-line"></div>
      <div className="form">
        <form action="https://formspree.io/f/xbjbgwev" method="POST">
          <label>Contact me</label>

          <input type="email" placeholder="Email" name="email" />

          <textarea name="message" placeholder="Message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
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
            <a href="https://www.linkedin.com/in/sombir5/">
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
