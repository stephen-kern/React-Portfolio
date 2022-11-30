import React from "react";

function Projects() {
  return (
    <section id="projects-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="flex-long flex">
        <div className="live-link-rb live-links-box">
          <div className="live-links-text">
            <a href="https://stephen-kern.github.io/run-buddy/">
              <button className="portfolio-buttons">
                Run Buddy <br></br>Made using CSS and HTML
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-row-short flex">
        <div className="live-link-hori live-links-box">
          <div className="live-links-text">
            <a href="https://stephen-kern.github.io/Horiseon/">
              <button className="portfolio-buttons">
                Horiseon <br></br> Built using CSS and HTML
              </button>
            </a>
          </div>
        </div>

        <div className="live-link-HH live-links-box">
          <div className="live-links-text">
            <a href="https://github.com/stephen-kern/Hamburger-Helper">
              <button className="portfolio-buttons">
                Hamburger Helper <br></br> Built using
                Node.js, express, sequelize, express-handlebars.
              </button>
            </a>
          </div>
        </div>

        <div className="live-link-jw live-links-box">
          <div className="live-links-text">
            <a href="https://jakewilsonart.github.io/">
              <button className="portfolio-buttons">
                Jake Wilson Art Portfolio <br></br> Built using CSS, HTML, and
                Javascript
              </button>
            </a>
          </div>
        </div>

        <div className="live-link-S2R live-links-box">
          <div className="live-links-text">
            <a href="https://stephen-kern.github.io/Step2Rythym/">
              <button className="portfolio-buttons">
                Step2Rhythm<br></br> Built using Bulma, HTML, Javascript,
                and JQuery
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
