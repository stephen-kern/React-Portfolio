import React from "react";
import resume from "../../assets/images/bbresume.pdf"

function Resume() {
  return (
    <section className="resume-section">
      <div>
        <h2 className="section-title">Resume</h2>
        <h5>Download my <a href={resume} className="resume-link">resume</a></h5>
      </div>
      <div>
        <h3>Front End </h3>
        <ul>
          <li> HTML </li>
          <li> CSS </li>
          <li> Bootstrap </li>
          <li> Javascript </li>
          <li> JQuery </li>
          <li> Responsive Design </li>
          <li> React </li>
        </ul>
      </div>
      <div>
        <h3>Back End</h3>
        <ul>
          <li> APIs </li>
          <li> Node </li>
          <li> Express </li>
          <li> MySQL and Sequelize </li>
          <li> MongoDB and Mongoose </li>
          <li> REST </li>
          <li> GraphQL </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
