import React from "react";

export default function Modal({ isOpen, closeModal }) {
  return (
    <>
      {isOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-container" id="Modal">
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
            <iframe
              src="/SK524.pdf"
              title="Resume"
              width="100%"
              height="600px"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
