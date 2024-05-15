import React from "react";

function Nav() {
  return (
    <header>
      <div className="navbar-container">
        <nav className="navbar">
          <h2>Stephen Kern</h2>
          <ul>
            <li>
              {/* <button onClick={(e) => {
                e.preventDefault();
                Modal.openModal();
                }}>
                View Resume
              </button> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
