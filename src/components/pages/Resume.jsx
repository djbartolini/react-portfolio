import React from "react";
import resume from '../../assets/resume.png'

export default function Resume() {
  return (
    <div className="page container">
      <div className="row">
        <div className="col-12">
          <h2>Resume</h2>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <a href="https://docs.google.com/document/d/1132SIe4IEdsLfeyIwnmHwjw4H6Ny2pIfM13nJ7XZX0A/edit?usp=sharing">
              <img src={resume} height="800" id="resume" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <ul>Skills:
            <li>JavaScript ES6</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>HTML, CSS</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}