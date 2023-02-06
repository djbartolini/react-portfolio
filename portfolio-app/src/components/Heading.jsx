import React from "react";
import logo from "../assets/dev-favicon.svg"

function Heading() {
  return (
  <header className="container-fluid">
    <div className="row my-3 justify-content-center">
      <div className="col-2">
        <img src={logo} alt="logo" className="img-fluid" id="logo" />
      </div>
      <div className="col-10">
        <h1>Daniel Bartolini</h1>
        <p>Web Development </p>
      </div>
    </div>
  </header>
  );
}

export default Heading;