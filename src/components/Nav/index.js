import React from "react";

function Nav() {
  return (
    <header>
      <div className="navbar-container">
        <nav className="navbar">
          <h2>Stephen Kern</h2>
          <ul>
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
      </div>
    </header>
  );
}

export default Nav;
