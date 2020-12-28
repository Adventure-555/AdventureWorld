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
              <a href="https://www.blackmagicdesign.com/products/davinciresolve/">
                Davanci Resolve
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </li>
            <li>
              <a href="https://notepad-plus-plus.org/downloads/">
                {" "}
                <img src={logo} alt="logo" width="30px" /> NotePad++
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.earth">
                Google Earth
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.adm">
                Google Find Your Device
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
