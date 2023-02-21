import React from "react";
import portrait from "../../assets/images/portrait.jpeg";
import { FaLinkedin, FaGithubSquare, FaMailBulk } from "react-icons/fa";

function About() {
  return (
    <section id="about-me-section">
      <div className="profile-card">
        <article className="profile-info">
          <div className="img-container">
            <img src={portrait} alt="Portrait of Stephen"></img>
          </div>
          <div className="bio">
            <h2 className="section-title">About Me</h2>
            <p>
              As a Front-End Developer, I'm passionate about creating web
              experiences that are both engaging and user-friendly. On my journey,
              I've honed my skills in communication, teamwork, and
              problem-solving, which have helped me lead projects and achieve
              positive results. I'm proud to hold a Full-Stack Development
              certificate from Washington University in St. Louis and have
              received recognition for delivering high-quality work.
              <br></br>
              <br></br>
              In my free time I enjoy solving puzzles, games, the outdoors, traveling, music, art, and
              geography.
            </p>
            <div>
              <div className="social-icons-col">
                <a
                  href="mailto: stephenkern96@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bio-social-icons"
                >
                  <FaMailBulk fontSize={"3em"} />
                </a>
                <p className="social-description">
                  Email me with any questions, concerns, or
                  collaborations!
                </p>
              </div>
              <div className="social-icons-col">
                <a
                  href="https://github.com/stephen-kern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bio-social-icons"
                >
                  <FaGithubSquare fontSize={"3em"} />
                </a>
                <p className="social-description">
                  Check out my GitHub profile for more projects!
                </p>
              </div>
              <div className="social-icons-col">
                <a
                  href="https://www.linkedin.com/in/stephenkern96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bio-social-icons"
                >
                  <FaLinkedin fontSize={"3em"} />
                </a>
                <p className="social-description">
                  Connect or message me on linked in! 
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
