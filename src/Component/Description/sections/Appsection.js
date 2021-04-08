import React, { Component } from "react";
import "./Appsection.css";
import logo from "./items/logo.svg";

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
                {/* <img src={logo} alt="logo" width="30px" />*/} NotePad++ 
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
            <li>
              <a href="https://obsproject.com/" target="_blank">Obs Studio</a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.canva.editor" target="_blank">Canva Application</a>
            </li>
            <li>
              <a href="https://www.movavi.com/adv/videoeditorplus-buy/?gclid=CjwKCAjw07qDBhBxEiwA6pPbHvtIW35d9zEigBD-cc37UqIAfksN3MjKGjnYQXy6un-Z60zKbx7yjBoCdqgQAvD_BwE" target="_blank">Movavi Video Editor</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1-o7IjyLommwjs1qqLCJEugkYD5C6UGJs/view" target="_blank">Movavi Video Editor Crack</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
