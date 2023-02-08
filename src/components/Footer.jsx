import React from "react";
import digitized from '../assets/headshot-digitized.PNG';

export default function Footer() {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-2 d-flex justify-content-center">
          <img src={digitized} alt="digitized headshot" id="digitized"></img>
        </div>
        <div className="col-10 footer-links">
          <a className="footer-link" href="https://github.com/">GitHub</a>
          <a className="footer-link" href="https://www.linkedin.com/in/daniel-bartolini-development/">LinkedIn</a>
          <a className="footer-link" href="https://stackoverflow.com/users/20453473/djbartolini">Stack Overflow</a>
        </div>
      </div>
    </div>
  )
}