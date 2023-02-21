import React from "react";
import { GrLinkedin, GrMail, GrGithub } from "react-icons/gr";

function Footer() {
  return (
    <footer>
      <div className="footer-social-container">
        <a
          href="mailto: stephenkern96@gmail.com"
          className="footer-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail fontSize={"2em"} />
        </a>

        <a
          href="https://github.com/stephen-kern"
          className="footer-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub fontSize={"2em"} />
        </a>

        <a
          href="https://www.linkedin.com/in/stephenkern96/"
          className="footer-icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin fontSize={"2em"} />
        </a>
      </div>
      <p> © Stephen Kern 2023</p>
    </footer>
  );
}

export default Footer;
