import React from "react";
import resume from '../../assets/resume.png'

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div className="d-flex justify-content-center">
        <img src={resume} height="800" id="resume" />
      </div>
    </div>
  );
}