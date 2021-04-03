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
              <a href="https://www.google.com/earth/"  target="_blank">Google Earth Web</a>
            </li>
            <li>
              <a href="https://www.altium.com/altium-trial-flow?utm_source=youtube&utm_medium=social&utm_campaign=yt-"
               target="_blank">
                Pcb Desing Website
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/en/"
               target="_blank">
                Node js Download
              </a>
            </li>
            <li>
              <a href="https://cdnjs.com/libraries/font-awesome"
               target="_blank">
                Font Awesome Cdn
              </a>
            </li>
            <li>
              <a href="https://fontawesome.com/"
               target="_blank">
                Font Awesome
              </a>
            </li>
            <li>
              <a href="https://www.canva.com/" target="_blank">Canva Web</a>
            </li>
            <li>
              <a href="https://github.com/Genymobile/scrcpy" target="_blank">SCRCPY</a>
            </li>
            <li>
              <a href="https://www.digitbin.com/mod-kinemaster-apk-download/" target="_blank">KineMaster Mod Apk</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
