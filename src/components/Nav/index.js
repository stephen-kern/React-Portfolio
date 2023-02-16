import React from "react";

function Nav(props) {
  const { currentNavLink, handleNavChange } = props;

  return (
    <header>
      <h2>Stephen Kern</h2>
      <nav className="navbar">
        <ul>
          <li className="mx-1">
            <a
              href="#about-me-section"
              // onClick={() => handleNavChange("About")}
              className={
                currentNavLink === "About" ? "navActive" : "noNavActive"
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              // onClick={() => handleNavChange("Projects")}
              className={
                currentNavLink === "Projects" ? "navActive" : "noNavActive"
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1If9CbTr6wQm1XRLusTGTLHV5_Y-C_IDWOkyNmC03PfY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
