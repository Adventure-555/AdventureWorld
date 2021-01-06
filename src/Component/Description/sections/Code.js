import React, { Component } from "react";
import codehtml from "./codehtml.png";
import codecss from "./codecss.png";
import "./Code.css";

export default class Code extends Component {
  animationHtmlLink = () => {
    navigator.clipboard.writeText(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Adventure World</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="loader"></div>
    </body>
    </html>`);
    alert("Html file Was Copyed to your Clipboard");
  };
  animationCssLink = () => {
    navigator.clipboard.writeText(`
    body {
      background-color: #000000;
    }
    
    .loader {
      width: 200px;
      height: 200px;
      border: 4px solid white;
      border-bottom: 4px solid blue;
      background-color: transprent;
      border-radius: 50%;
      animation: load 1s ease-in-out infinite;
    }
    
    @keyframes load {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`);
    alert("Css file was Copy to your Clipboard");
  };
  render() {
    return (
      <div className="code-container">
        <h1 className="code-h1">Codes</h1>
        <div className="code-links">
          <ul type="square">
            <li>
              <a href="https://drive.google.com/file/d/1S3SOS0lqGqdxnUZG8i8t2Nt6uHzou-vC/view?usp=sharing"  target="_blank">
                Html Basic Tags
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/10qWgrQgUiQJH-7X3QzQfXyxhdDk55N9N/view?usp=sharing"  target="_blank">
                WebPage-#1 Html
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1xBRC1A97kwjPO-yZRrGDq7A8mOCKpnw1/view?usp=sharing"  target="_blank">
                WebPage-#1 Css
              </a>
            </li>
            <li>
              <a href={codehtml}  target="_blank">
                Animation 1# Html
                <br/>
                <button
                  className="animation"
                  onClick={this.animationHtmlLink}
                >
                  Copy
                </button>
              </a>
            </li>
            <br/>
            <li>
              <a href={codecss}  target="_blank">
                Animation 1# Css
                <br/>
                <button
                  className="animation"
                  onClick={this.animationCssLink}
                >
                  Copy
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
