import React, { Component } from "react";
import "./Links.css";

export default class Links extends Component {
  render() {
    return (
      <div className="link-container">
        <h1 className="link-h1">Links</h1>
        <div className="link-a">
          <ul type="square">
            <li>
              <a href="https://www.google.com/earth/">Google Earth Web</a>
            </li>
            <li>
              <a href="https://www.altium.com/altium-trial-flow?utm_source=youtube&utm_medium=social&utm_campaign=yt-">
                Pcb Desing Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
