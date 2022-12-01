import React from "react";
import { FaGithubSquare } from "react-icons/fa"

function Projects() {
  return (
    <section id="projects-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="flex-long flex">
        <div className="live-link-rb live-links-box">
          <div className="live-links-text">
            <a href="https://stephen-kern.github.io/run-buddy/" target={"_blank"} rel={"noopener noreferrer"}>
              <button className="portfolio-buttons">
                Run Buddy <br></br>Made using CSS and HTML
              </button>
            </a>
            <a href="https://github.com/stephen-kern/run-buddy" className="footer-icons">
              {" "}
              < FaGithubSquare fontSize={"3em"}/>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-row-short flex">
        <div className="live-link-hori live-links-box">
          <div className="live-links-text">
            <a href="https://stephen-kern.github.io/Horiseon/" target={"_blank"} rel={"noopener noreferrer"}>
              <button className="portfolio-buttons">
                Horiseon <br></br> Built using CSS and HTML
              </button>
            </a>
            <a href="https://github.com/stephen-kern/Horiseon" className="footer-icons">
              {" "}
              < FaGithubSquare fontSize={"3em"}/>
            </a>
          </div>
        </div>

        <div className="live-link-HH live-links-box">
          <div className="live-links-text">
            <a href="https://murmuring-dawn-13881.herokuapp.com/" target={"_blank"} rel={"noopener noreferrer"}>
              <button className="portfolio-buttons">
                Hamburger Helper <br></br> Built using
                Node.js, express, sequelize, express-handlebars.
              </button>
            </a>
            <a href="https://github.com/stephen-kern/Hamburger-Helper" className="footer-icons">
              {" "}
              < FaGithubSquare fontSize={"3em"}/>
            </a>
          </div>
        </div>

        <div className="live-link-jw live-links-box">
          <div className="live-links-text">
            <a href="https://jakewilsonart.github.io/" target={"_blank"} rel={"noopener noreferrer"}>
              <button className="portfolio-buttons">
                Jake Wilson Art Portfolio <br></br> Built using CSS, HTML, and
                Javascript
              </button>
            </a>
            <a href="https://github.com/stephen-kern" className="footer-icons">
              {" "}
              < FaGithubSquare fontSize={"3em"}/>
            </a>
          </div>
        </div>

        <div className="live-link-S2R live-links-box">
          <div className="live-links-text">
            <a href="https://stephen-kern.github.io/Step2Rythym/" target={"_blank"} rel={"noopener noreferrer"}>
              <button className="portfolio-buttons">
                Step2Rhythm<br></br> Built using Bulma, HTML, Javascript,
                and JQuery
              </button>
            </a>
            <a href="https://github.com/stephen-kern/Step2Rythym" className="footer-icons">
              {" "}
              < FaGithubSquare fontSize={"3em"}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
