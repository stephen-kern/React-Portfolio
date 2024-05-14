import React, { useState } from "react";

function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    
    Modal.openModal = openModal;

    return(
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                <div className="modal">
                  <button className="close-button" onClick={closeModal}>
                    Close
                  </button>
                  <iframe
                    title="PDF Viewer"
                    src="../../assets/images/SK524.pdf"
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

export default Modal;
