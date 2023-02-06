import React from "react";

export default function Contact() {
  return (
    <div className="page container">
      <div className="row mb-3">
        <div className="col-12">
          <h2>Contact</h2>
        </div>
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-9">
          <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Contact:</option>
            <option value="1">Get a quote on a personalized website</option>
            <option value="2">Leave a Testimonial</option>
            <option value="3">Make a suggestion for site improvements</option>
          </select>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" className="form-control" placeholder="First and Last Name" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Message</span>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  );

}