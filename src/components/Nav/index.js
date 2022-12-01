import React from "react";

function Nav(props) {
  const { currentNavLink, handleNavChange } = props;

  return (
    <header>
      <h2>
        <a
          href="#about-me-section"
          onClick={() => handleNavChange("About")}
          className={currentNavLink === "About"}
        >
          Stephen Kern
        </a>
      </h2>
      <nav className="navbar">
        <ul>
          <li className="mx-1">
            <a
              href="#about-me-section"
              onClick={() => handleNavChange("About")}
              className={
                currentNavLink === "About" ? "resume-link" : "navActive"
              }
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={() => handleNavChange("Contact")}
              className={
                currentNavLink === "Contact" ? "navActive" : "resume-link"
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              onClick={() => handleNavChange("Projects")}
              className={
                currentNavLink === "Projects" ? "navActive" : "resume-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#resume-section"
              onClick={() => handleNavChange("Resume")}
              className={
                currentNavLink === "Resume" ? "navActive" : "resume-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
