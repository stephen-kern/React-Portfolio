import React from "react";
import portrait from "../../assets/images/portrait.jpeg"
import Card from "../../components/Card";

function About() {
  return (
    <section id="about-me-section">
      <div className="profile-card">
        <article className="profile-info">
          <div className="img-container">
            <img
              src={ portrait }
              className="profile-info"
              alt="Portrait of Stephen"
            ></img>
          </div>
          <div className="bio">
            <h2>About Me</h2>
            <p>
              Hello! I am currently enrolled in Washington University St. Louis Coding
              Bootcamp to further my education and grow as a developer. I have
              experience with HTML, CSS, Git, JavaScript, SQL, MongoDB, Express, React, and Node!
              <br></br><br></br>
              Aside from coding, I enjoy the outdoors, traveling, music, art,
              geography, puzzles and games.
              <br></br>
              Searching for job opportunities to enhance my technical &
              professional skills.
            </p>
          </div>
        </article>
      </div>
      <Card /> 
    </section>
  );
}

export default About;
