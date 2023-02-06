import React from "react";
import aboutPhoto from '../../assets/about-photo-copy.JPG';

export default function About() {
  return (
    <div className="page container" id="page">
      <div className="row mb-3">
        <div className="col-12">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row align-items-center mb-3" id="about-content">
        <div className="col-5 p-3">
          <img className="img-fluid" src={aboutPhoto} alt="Picture of Daniel and his dog" id="about-photo"></img>
        </div>
        <div className="col-7 p-3">
          <h3><em>Your Vision, My Keyboard</em></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae doloribus quidem aliquid beatae consectetur ut debitis et eum ipsam repellendus ipsum odio nostrum, consequuntur id quos provident eaque labore hic.</p>
        </div>
      </div>
      <div className="row align-items-center mb-3" id="about-content">
        <div className="col-12">
          <h3><em>My Story</em></h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo! Quas perferendis quae natus voluptatibus reprehenderit, adipisci ut. Repellendus voluptas deserunt labore placeat. Dignissimos consequuntur dolorem quasi? Delectus, qui inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo veritatis, repellat et cumque doloribus nostrum at nulla eaque, animi soluta ratione harum quas sit, totam impedit aliquid pariatur? Sapiente.</p>
        </div>
      </div>
    </div>
  );

}