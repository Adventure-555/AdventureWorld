import React, { Component } from "react";
import "./Appsection.css";
import logo from "./logo.svg";

export default class Appsection extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-h1">Apps</h1>
        <div className="app-links">
          <ul type="square">
            <li>
              <a href="https://www.blackmagicdesign.com/products/davinciresolve/"  target="_blank">
                Davanci Resolve
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
            <li>
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                {" "}
                <img src={logo} alt="logo" width="30px" /> NotePad++
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.earth"  target="_blank">
                Google Earth
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.adm"  target="_blank">
                Google Find Your Device
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
