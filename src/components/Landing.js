import React from "react";
import "../styles/Landing.css";
import Navbar from "./Navbar";

function Landing() {
  return (
    <div className="general">
      <Navbar />
      <div className="container">
        <div className="col">
          <div className="butt">
            <button type="button" class="btn login btn-primary btn-md">
              LOGIN
            </button>

            <button type="button" class="btn signup btn-secondary btn-md">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Landing;
