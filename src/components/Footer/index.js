import React from "react";
import { FaLinkedin, FaGithubSquare, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <section id="contact-section">
      <footer>
        <div className="contact-container">
          <div className="contact-info">
            <a href="mailto: stephenkern96@gmail.com" className="footer-icons">
              <FaMailBulk fontSize={"3em"}/>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://github.com/stephen-kern" className="footer-icons">
              {" "}
              <FaGithubSquare fontSize={"3em"}/>
            </a>
          </div>
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/stephenkern96/" className="footer-icons">
              {" "}
              <FaLinkedin fontSize={"3em"}/>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
