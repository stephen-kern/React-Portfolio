import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src="images/BillEvans.jpg" alt="Bill Evans, the pianist"></img>
      </div>
      <div className="card-content">
        <p className="card-title"> Bill Evans </p>
        <div className="card-info">
          <p> The American Jazz Pianist </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
