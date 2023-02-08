import React from "react";
import sofa from "../../../public/images/sofa-screenshot.png";
import ecommerce from "../../../public/images/ecommerce-back-end-demo.gif";
import employee from "../../../public/images/employee-demo.gif";
import weather from "../../../public/images/weather-dash.png";
import readme from "../../../public/images/read-me-generator-demo.gif";
import readOrWatch from "../../../public/images/screenshot-read-or-watch.png"

export default function Portfolio() {
  return (
    <div className="page container">
      
      <div className="row mb-3">
        <div className="col-12">
          <h2>Portfolio</h2>
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-6 col-md-12 text-center">
          <div className="image-container">
            <a href="http://quiet-river-37193.herokuapp.com/">
              <img src={sofa} className="portfolio-image"></img>
            </a>
            <div id="sofa-name"><i>Sofa-King Cool</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-6 col-md-9">
          <p className="text-center"><i>Express-driven RESTful funiture studio web app powered by sequelize and handlebars</i></p>
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-6 col-md-12 text-center">
          <div className="image-container">
            <a href="https://github.com/djbartolini/ecommerce-back-end">
              <img src={ecommerce} className="portfolio-image"></img>
            </a>
            <div id="ecommerce-name"><i>eCommerce Back End</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-6 col-md-9">
          <p className="text-center"><i>A Node.js terminal command prompt system for managing a SQL database</i></p>
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-6 col-md-12 text-center">
          <div className="image-container">
            <a href="https://github.com/djbartolini/employee-management-system">
              <img src={employee} className="portfolio-image"></img>
            </a>
            <div id="ecommerce-name"><i>Employee Management System</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-6 col-md-9">
          <p className="text-center"><i>A Node.js terminal command prompt system for managing a JSON database</i></p>
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-6 col-md-12 text-center">
          <div className="image-container">
            <a href="https://djbartolini.github.io/weather-dashboard/">
              <img src={weather} className="portfolio-image"></img>
            </a>
            <div id="sofa-name"><i>Weather Dashboard</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-6 col-md-9">
          <p className="text-center"><i>Bootstrap-powered weather page for getting a 5-day forecast for any city</i></p>
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-6 col-md-12 text-center">
          <div className="image-container">
            <a href="https://github.com/djbartolini/read-me-generator">
              <img src={readme} className="portfolio-image"></img>
            </a>
            <div id="ecommerce-name"><i>Readme Generator</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-6 col-md-9">
          <p className="text-center"><i>Node.js prompt system for creating and rendering a markdown README doc for developers</i></p>
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-6 col-md-12 text-center">
          <div className="image-container">
            <a href="https://djbartolini.github.io/movies-and-books/">
              <img src={readOrWatch} className="portfolio-image"></img>
            </a>
            <div id="ecommerce-name"><i>To Read or to Watch</i></div>
          </div>
        </div>
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col-6 col-md-9">
          <p className="text-center"><i>Front-end interface that synchronously fetches data from both the OMDb library and Google Books library</i></p>
        </div>
      </div>
    </div>
  );

}