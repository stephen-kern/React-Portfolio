// import React, { useState } from "react";

// export default function Modal() {

//     const [isOpen, setIsOpen] = useState(false);

//     const openModal = () => {
//         setIsOpen(!isOpen);
//         console.log("clicked");
//     };

//     const closeModal = () => {
//       setIsOpen(false);
//     };
    
//     return(
//         <>
//             {isOpen && (
//                 <div className="modal-overlay" onClick={closeModal}>
//                 <div className="modal">
//                   <button className="close-button" onClick={closeModal}>
//                     Close
//                   </button>
//                   <iframe
//                     title="PDF Viewer"
//                     src="../../assets/images/SK524.pdf"
//                     width="100%"
//                     height="100%"
//                     frameborder="0"
//                   ></iframe>
//                 </div>
//               </div>
//             )}
        
//         </>

//     )
// }


