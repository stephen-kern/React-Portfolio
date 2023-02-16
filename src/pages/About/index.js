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
            <h2>About Me</h2>
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
              Aside from coding, I enjoy the outdoors, traveling, music, art,
              geography, puzzles and games.
              <br></br>
              <br></br>
              Searching for full time front-end opportunities to enhance my
              technical & professional skills.
            </p>
            <div className="contact-container">
              <div className="social-icons-col">
                <a
                  href="mailto: stephenkern96@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bio-social-icons"
                >
                  <FaMailBulk fontSize={"3em"} />
                </a>
                <p>
                  Feel free to email me with any questions, concerns, or
                  opportunities!
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
                <p>
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
                <p>
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
