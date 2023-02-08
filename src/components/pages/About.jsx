import React from "react";
import sofa from '../../../public/images/sofa-screenshot.png';
import headshot from '../../../public/images/headshot.jpg'

export default function About() {
  return (
    <div className="page container" id="page">
      <div className="row mb-3">
        <div className="col-12">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-12 text-center">
          <div className="image-container">
            <img src={sofa} className="img-fluid portfolio-image"></img>
            <div id="sofa-name"><i>Sofa-King Cool</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-9">
          <p className="text-center"><i>Express-driven RESTful funiture studio web app powered by sequelize and handlebars</i></p>
        </div>
      </div>
      <div className="row mb-3 align-items-center">
        <div className="col-3">
          <img src={headshot} alt="headshot" className="img-fluid" id="headshot"></img>
        </div>
        <div className="col-9 md-col-6 lg-col-5">
          <p>My name is Daniel Bartolini and I am from the humble little city of Asheville, NC, a local hub of creativity and craft. I grew up a musician and to this day I continue making funk music. Check out my music <a href="https://soundcloud.com/user-samo_the_third">here!</a> I am also a former emergency nurse, with 5 years of experience working on the frontlines before and during the pandemic. I then decided to pivot my career and fully devote my time to more creative passions - design and programming - to create immersive, innovative applications. My background in creative songwriting coupled with my critical thinking as an emergency healthcare provider has taught me a unique skillset that I apply to every ounce of code I develop.</p>
        </div>
      </div>
    </div>
  );

}