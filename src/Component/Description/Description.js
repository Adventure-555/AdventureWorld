import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Description.css";
// import bubble from "./bubble.png";

export default class Description extends Component {
  render() {
    return (
      <div className="description-container">
        <div className="links-container">
          <div className="link-one">
            <h1>
              <Link to="/Links">
                <i class="fas fa-link"></i>Links
              </Link>
            </h1>
          </div>
          <div className="link-two">
            <h1>
              <Link to="/Code">
                <i class="fas fa-code"></i>Codes
              </Link>
            </h1>
          </div>
          <div className="link-three">
            <h1>
              <Link to="/Appsection">
                <i class="fab fa-app-store-ios"></i>Apps
              </Link>
            </h1>
          </div>
          <div className="link-four">
            <h1>
              <Link to="/Otherfile">
              <i class="fas fa-folder"></i>Others
              </Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
