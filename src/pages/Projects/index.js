import React from "react";

import Card from "../../components/Card";

const projectsData = [
  {
    img: "",
    alt: "screenshot of an art portfolio",
    title: "Jake Wilson Art Portfolio",
    desc: "With the aim of refining my understanding of React and practicing the fundamentals, I took on the task of revising my first meaningful project. This not only provided me with a valuable learning experience, but it also allowed me to support my friend Jake in sharing his innovative creations with others.",
    githubLink: "https://github.com/stephen-kern/Jake-Wilson-Portfolio",
    liveLink: "https://jake-wilson-portfolio.vercel.app/",
  },
  {
    img: "",
    alt: "screenshot of Live Wire - A social media platform for discussing music",
    title: "Live Wire",
    desc: "Live Wire is a social media platform that allows users to share their thoughts and experiences on live musical events. Built using the MERN Stack and client-side technologies like Apollo, Stripe, AntD, and GraphQL.",
    githubLink: "https://github.com/stephen-kern/Live-Wire",
    liveLink: "https://live-wire-music.herokuapp.com/",
  },
  {
    img: "",
    alt: "screenshot of a command line interface application",
    title: "Readme-Generator",
    desc: "A CLI application to help developers save time and quickly generate a readme file. Using Node and the Inquirer package, this back-end project streamlines the process and allows developers to focus more on their projects.",
    githubLink: "https://github.com/stephen-kern/Readme-Generator",
  }
];

function Projects() {
  return (
    <div>
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
    </div>
  );
}

export default Projects;
