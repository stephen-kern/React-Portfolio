import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={props.img} alt={props.alt}></img>
      </div>
      <div className="card-content">
        <div className="card-info-container">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-info">{props.desc}</p>
        </div>
        <div className="card-links">
          <button>
            <a href={props.githubLink}>GitHub</a>
          </button>
          <button>
            <a href={props.liveLink}>Live</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
