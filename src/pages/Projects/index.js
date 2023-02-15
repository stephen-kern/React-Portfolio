import React from "react";

import Card from "../../components/Card";
import LiveWire from "../../assets/images/livewire_card.png";
import JWP from "../../assets/images/jwp_card.png";
import RMG from "../../assets/images/readme_card.png";

const projectsData = [
  {
    img: JWP,
    alt: "screenshot of an art portfolio",
    title: "Fine Arts Portfolio",
    desc: "A React-based fine arts portfolio created for a friend, with assistance from Material-UI (MUI) and EmailJS. The portfolio enables easy communication between the artist and their audience through a cloud-based email service.",
    githubLink: "https://github.com/stephen-kern/Jake-Wilson-Portfolio",
    liveLink: "https://jake-wilson-portfolio.vercel.app/",
  },
  {
    img: LiveWire,
    alt: "screenshot of Live Wire - A social media platform for discussing music",
    title: "Live Wire",
    desc: "Live Wire is a social media platform that allows users to share their thoughts and experiences on live musical events. Built using the MERN Stack and client-side technologies like Apollo, Stripe, AntD, and GraphQL.",
    githubLink: "https://github.com/stephen-kern/Live-Wire",
    liveLink: "https://live-wire-music.herokuapp.com/",
  },
  {
    img: RMG,
    alt: "screenshot of a command line interface application",
    title: "Readme Generator",
    desc: "A CLI application to help developers save time and quickly generate a readme file. Using only Node and the Inquirer package, this back-end project allows developers to focus more on their projects. Suitable for all types of software development!",
    githubLink: "https://github.com/stephen-kern/Readme-Generator",
  }
];

function Projects() {
  return (
    <section className="grid-container">
      <h2 className="section-title">Projects</h2>
      <div className="columns">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            alt={project.alt}
            title={project.title}
            desc={project.desc}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
