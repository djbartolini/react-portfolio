import React from "react";
import digitized from '../../public/images/headshot-digitized.PNG';
import logo from "../../public/images/dev-favicon.svg";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-2 d-flex justify-content-end">
          <img src={digitized} alt="digitized headshot" id="digitized"></img>
        </div>
        <div className="col-10 footer-links">
          <div>
            <p className="footer-name d-inline">Daniel Bartolini</p>
            <img src={logo} height="30"></img>
            <p className="footer-name d-inline">Web Development</p>
          </div>
          <div className="row d-block">
            <a className="footer-link" href="https://github.com/">GitHub</a>
            <a className="footer-link" href="https://www.linkedin.com/in/daniel-bartolini-development/">LinkedIn</a>
            <a className="footer-link" href="https://stackoverflow.com/users/20453473/djbartolini">Stack Overflow</a>
          </div>
        </div>
      </div>
    </div>
  )
}