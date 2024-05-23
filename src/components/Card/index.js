import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.alt} className="card__img"></img>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-info">{props.desc}</p>
        <div className="card-links">
          <button>
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
          {props.liveLink && (
            <button>
              <a
                href={props.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </button>
          )}
        </div>
    </div>
  );
}

export default Card;
