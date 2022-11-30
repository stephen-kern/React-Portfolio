import React from "react";

function Projects() {
  return (
    <section id="work-ex-section">
      <h2 class="section-title">Work Experience</h2>

      <div class="flex-long flex">
        <div class="live-link-rb live-links-box">
          <div class="live-links-text">
            <a href="https://stephen-kern.github.io/run-buddy/">
              <button className="portfolio-buttons">
                Run Buddy <br></br>Made using CSS and HTML
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="flex-row-short flex">
        <div class="live-link-hori live-links-box">
          <div class="live-links-text">
            <a href="https://stephen-kern.github.io/challengeOne/">
              <button className="portfolio-buttons">
                Horiseon <br></br> Made using CSS and HTML
              </button>
            </a>
          </div>
        </div>

        <div class="live-link-HH live-links-box">
          <div class="live-links-text">
            <a href="https://github.com/stephen-kern/Hamburger-Helper">
              <button className="portfolio-buttons">
                Hamburger Helper <br></br> Hamburger-Helper was built using
                Node.js, express, sequelize, express-handlebars.
              </button>
            </a>
          </div>
        </div>

        <div class="live-link-jw live-links-box">
          <div class="live-links-text">
            <a href="https://jakewilsonart.github.io/">
              <button className="portfolio-buttons">
                Jake Wilson Art Portfolio <br></br> Made using CSS, HTML, and
                Javascript
              </button>
            </a>
          </div>
        </div>

        <div class="live-link-S2R live-links-box">
          <div class="live-links-text">
            <a href="https://stephen-kern.github.io/Step2Rythym/">
              <button className="portfolio-buttons">
                Step2Rhythm<br></br> Made using CSS Framework, HTML, Javascript,
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
