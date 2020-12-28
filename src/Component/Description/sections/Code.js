import React, { Component } from "react";
import "./Code.css";

export default class Code extends Component {
  render() {
    return (
      <div className="code-container">
        <h1 className="code-h1">Codes</h1>
        <div className="code-links">
          <ul type="square">
            <li>
              <a href="https://drive.google.com/file/d/1S3SOS0lqGqdxnUZG8i8t2Nt6uHzou-vC/view?usp=sharing">
                Html Basic Tags
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/10qWgrQgUiQJH-7X3QzQfXyxhdDk55N9N/view?usp=sharing">
                WebPage-#1 Html
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1xBRC1A97kwjPO-yZRrGDq7A8mOCKpnw1/view?usp=sharing">
                WebPage-#1 Css
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
