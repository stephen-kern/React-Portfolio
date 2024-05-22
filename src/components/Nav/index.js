import React, { useState } from "react";
import Modal from "../Modal";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="navbar-container">
        <nav className="navbar">
          <h2>Stephen Kern</h2>
          <ul>
            <li>
              <button className="open-modal" onClick={openModal}>
                Resume
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </header>
  );
}

export default Nav;
