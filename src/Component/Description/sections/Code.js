import React, { Component } from "react";
import codehtml from "./codehtml.png";
import codecss from "./codecss.png";
import todoappjs from "./todoappjs.png";
import todoappcssone from "./todoappcssone.png";
import todoappcsstwo from "./todoappcsstwo.png";
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
  todoAppJs = () => {
    navigator.clipboard.writeText(`
    import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {
    render() {
        return (
           <div className="todo-container">
               <form className="input-section">
                   <h1>TodoApp</h1>
                   <input type="text"
                   placeholder="Enter items ......."/>
               </form>
               <ul>
                   <li>
                       items
                   </li>
               </ul>
           </div>
        )
    }
}`);
    alert("Js code was Copy to Your Clipbord");
  };
  todoAppCss=()=>{
    navigator.clipboard.writeText(`
    body{
      margin: 0;
      background-color: #056679;
      font-family: sans-serif;
  }
  
  .todo-container{
      color: black;
      width: 350px;
      margin-top: 100px;
      margin-left: 50%;
      transform: translate(-50%);
      text-align: center;
  }
  h1{
      margin: 0;
      margin-bottom: 15px;
      color: #0b768be8;
  }
  .input-section{
      background-color: #055565;
      padding: 18px;
      border-radius: 10px;
      box-shadow: 0px 4px 6px #02313b;
  }
  
  .input-section  input{
      border-radius: 5px;
      border: 1px solid #106879;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      background-color: #055565;
      outline: none;
      color: #08869e;
  }
  input::placeholder{
      color: #08869e
  }
  
  ul{
      padding: 0px;
      text-align: left;
  }
  ul li{
      list-style: none;
      background-color: #055565;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 10px;
      color: #08869e;
      box-shadow: 0px 4px 6px #02313b;
      display: flex;
  }`)
  alert("Css code was Copy to your Clipboard")
  }
  render() {
    return (
      <div className="code-container">
        <h1 className="code-h1">Codes</h1>
        <div className="code-links">
          <ul type="square">
            <li>
              <a
                href="https://drive.google.com/file/d/1S3SOS0lqGqdxnUZG8i8t2Nt6uHzou-vC/view?usp=sharing"
                target="_blank"
              >
                Html Basic Tags
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/10qWgrQgUiQJH-7X3QzQfXyxhdDk55N9N/view?usp=sharing"
                target="_blank"
              >
                WebPage-#1 Html
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1xBRC1A97kwjPO-yZRrGDq7A8mOCKpnw1/view?usp=sharing"
                target="_blank"
              >
                WebPage-#1 Css
              </a>
            </li>
            <li>
              <a href={codehtml} target="_blank">
                Animation 1# Html
                <br />
                <button className="animation" onClick={this.animationHtmlLink}>
                  Copy
                </button>
              </a>
            </li>
            <br />
            <li>
              <a href={codecss} target="_blank">
                Animation 1# Css
                <br />
                <button className="animation" onClick={this.animationCssLink}>
                  Copy
                </button>
              </a>
            </li>
            <br />
            <li>
              <a href={todoappjs} target="_blank">
                TodoApp js
                <br />
                <button className="animation" onClick={this.todoAppJs}>
                  Copy
                </button>
              </a>
            </li>
            <li>
              <a href={todoappcssone} target="_blank">
                TodoApp Css file Section 1
              </a>
              <br />
              <a href={todoappcsstwo} target="_blank">
                TodoApp Css file Section 2
                <br />
                <button className="animation" onClick={this.todoAppCss}>
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
