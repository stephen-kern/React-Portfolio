import React from "react";

function Modal({isOpen, onClose}) {
    return(
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                <div className="modal">
                  <button className="close-button" onClick={onClose}>
                    Close
                  </button>
                  <iframe
                    title="PDF Viewer"
                    src="your_pdf_url_here"
                    width="100%"
                    height="100%"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            )}
        
        </>

    )
}