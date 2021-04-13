import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./packs.css";
import codehtml from "./packs-items/codehtml.png";
import codecss from "./packs-items/codecss.png";
import todoappjsone from "./packs-items/todoappjsone.png";
import todoappjstwo from "./packs-items/todoappjstwo.png";
import todoappcssone from "./packs-items/todoappcssone.png";
import todoappcsstwo from "./packs-items/todoappcsstwo.png";
import todoappcssthree from "./packs-items/todoappcssthree.png";

export default class packs extends Component {

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
        import React, { Component } from "react";
    import "./TodoApp.css";
    
    export default class TodoApp extends Component {
        state = {
            input: "",
            items: [],
            selectedItems: false,
        }
    
        handleChange = event =>{
            this.setState({
              input: event.target.value
            });
          };
        storeItems = event =>{
            event.preventDefault();
            const {input} = this.state;
            
        
            this.setState({
              items: [...this.state.items,input],
              input: ""
            });
          }
          deleteItems= key =>{
              const allItems = this.state.items
    
              allItems.splice(key,1)
    
              this.setState({
                  items: allItems
              })
          }
      render() {
        const { input, items }=this.state;
        return (
          <div className="todo-container">
            <form className="input-section" onSubmit={this.storeItems}>
              <h1>TodoApp</h1>
              <input type="text"
                value= {input}
                onChange={this.handleChange}
                placeholder="Enter items ......."
              />
            </form>
            <ul>
             {items.map((data,index)=>(
                  <li key={index}>
                      {data}
                  <i class="fas fa-trash-alt" onClick={()=>this.deleteItems(index)}></i>
                </li>
             ))}
            </ul>
          </div>
        );
      }
    }`);
    alert("Js code was Copy to Your Clipbord");
  };
  todoAppCss = () => {
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
      }
      
      ul li i{
          text-align: right;
          flex: 1;
          cursor: pointer;
      }
      
      ul li i:hover{
          color: #23a3bd;
      }`);
    alert("Css code was Copy to your Clipboard");
  };
  render() {
    return (
      <div className="packs-container">
        <div className="pack">
        <div className="packs-description">
          <Link to="/Description">Description</Link>
        </div>
        <div className="packs">
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                Best Video Editor For Low End Pc/How to Crack Movavi Video
                Editor <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                Best Video Editor For Low End Pc/How to Crack Movavi Video
                EditorBest Video Editor For Low End Pc/How to Crack Movavi Video
                Editor
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a
                    href="https://www.movavi.com/adv/videoeditorplus-buy/?gclid=CjwKCAjw07qDBhBxEiwA6pPbHvtIW35d9zEigBD-cc37UqIAfksN3MjKGjnYQXy6un-Z60zKbx7yjBoCdqgQAvD_BwE"
                    target="_blank"
                  >
                    Movavi Video Editor
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1-o7IjyLommwjs1qqLCJEugkYD5C6UGJs/view"
                    target="_blank"
                  >
                    Movavi Video Editor Crack
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.win-rar.com/download.html?&L=0"
                    target="_blank"
                  >
                    WinRaR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                How to Download KineMaster Mod Apk For Free/ No WaterMark Full
                Unlocked/100% Work <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download KineMaster Mod Apk For Free/ No WaterMark Full
                Unlocked/100% WorkHow to Download KineMaster Mod Apk For Free/
                No WaterMark Full Unlocked/100% Work
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a
                    href="https://www.digitbin.com/mod-kinemaster-apk-download/"
                    target="_blank"
                  >
                    KineMaster Mod Apk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                How to Mirror Mobile Screen Into Pc/Without any App & No
                Elgato/With Scrcp <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a
                    href="https://github.com/Genymobile/scrcpy"
                    target="_blank"
                  >
                    SCRCPY
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                How to Edit Thumbnail for YouTube/with Canva/Adventure World
                Malayalam <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.canva.editor"
                    target="_blank"
                  >
                    Canva Application
                  </a>
                </li>
                <li>
                  <a href="https://www.canva.com/" target="_blank">
                    Canva Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                How to Record Screen in Pc or Computer/Inni ithokke
                Enth/Adventure World Malayalam <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a href="https://obsproject.com/" target="_blank">
                    Obs Studio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                How to Create TodoApp With React/Functioning & Adding Trash bin/{" "}
                <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a
                    href="https://cdnjs.com/libraries/font-awesome"
                    target="_blank"
                  >
                    Font Awesome Cdn
                  </a>
                </li>
                <li>
                  <a href="https://fontawesome.com/" target="_blank">
                    Font Awesome
                  </a>
                </li>
                <li>
                  <a href={todoappcssone} target="_blank">
                    TodoApp Css file Section 1
                  </a>
                  <br />
                  <a href={todoappcsstwo} target="_blank">
                    TodoApp Css file Section 2
                  </a>
                  <br />
                  <a href={todoappcssthree} target="_blank">
                    TodoApp Css file Section 3
                    <br />
                    <button className="packs-code-copy" onClick={this.todoAppCss}>
                      Copy
                    </button>
                  </a>
                </li>
                <li>
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                NotePad++ 
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                How to Create TodoApp With React/Basic Contents & Styling{" "}
                <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a
                    href="https://cdnjs.com/libraries/font-awesome"
                    target="_blank"
                  >
                    Font Awesome Cdn
                  </a>
                </li>
                <li>
                  <a href="https://fontawesome.com/" target="_blank">
                    Font Awesome
                  </a>
                </li>
                <li>
                  <a href={todoappjsone} target="_blank">
                    TodoApp js Functions
                  </a>
                  <br />
                  <a href={todoappjstwo} target="_blank">
                    TodoApp js Basic codes
                    <br />
                    <button className="packs-code-copy" onClick={this.todoAppJs}>
                      Copy
                    </button>
                  </a>
                </li>
                <li>
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                NotePad++ 
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
                What is React/React introduction/How to Install React/React
                tutorial-1/ <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
                <li>
                  <a href="https://nodejs.org/en/" target="_blank">
                    Node js Download
                  </a>
                </li>
                <li>
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                NotePad++ 
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
              Css Animation How to Create Loading Page with Html & Css<i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
              <li>
              <a href={codehtml} target="_blank">
                Animation 1# Html
                <br />
                <button className="packs-code-copy" onClick={this.animationHtmlLink}>
                  Copy
                </button>
              </a>
            </li>
            <br />
            <li>
              <a href={codecss} target="_blank">
                Animation 1# Css
                <br />
                <button className="packs-code-copy" onClick={this.animationCssLink}>
                  Copy
                </button>
              </a>
            </li>
            <li>
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                NotePad++ 
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
              </ul>
            </div>
          </div>
          </div>
         <div className="packs-box">
         <div className="packs-content">
            <div className="packs-header">
              <h3>
              How to Make WebSite With Html And Css <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
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
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                NotePad++ 
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
              </ul>
            </div>
          </div>
         </div>
         <div className="packs-box">
         <div className="packs-content">
            <div className="packs-header">
              <h3>
              Html Tutorial - 1 <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
              <li>
              <a
                href="https://drive.google.com/file/d/1S3SOS0lqGqdxnUZG8i8t2Nt6uHzou-vC/view?usp=sharing"
                target="_blank"
              >
                Html Basic Tags
              </a>
            </li>
            <li>
              <a href="https://notepad-plus-plus.org/downloads/"  target="_blank">
                NotePad++ 
              </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/"  target="_blank">Visual Studio Code</a>
            </li>
              </ul>
            </div>
          </div>
          <div className="packs-content">
            <div className="packs-header">
              <h3>
              How to Design a Pcb <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
              <li>
              <a href="https://www.altium.com/altium-trial-flow?utm_source=youtube&utm_medium=social&utm_campaign=yt-"
               target="_blank">
                Pcb Desing Website
              </a>
            </li>
              </ul>
            </div>
          </div>
         </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
              How to find Your Device <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
              <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.adm"  target="_blank">
                Google Find Your Device
              </a>
            </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="packs-box">
          <div className="packs-content">
            <div className="packs-header">
              <h3>
              What is google Earth <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
              <li>
              <a href="https://play.google.com/store/apps/details?id=com.google.earth"  target="_blank">
                Google Earth
              </a>
            </li>
              </ul>
            </div>
          </div>
          </div>
         <div className="packs-box">
         <div className="packs-content">
            <div className="packs-header">
              <h3>
              How to Download Davanci resolve-16 <i class="fas fa-angle-down"></i>
              </h3>
            </div>
            <div className="packs-tle">
              <p>
                How to Download YouTube Videos to Gallery on Mobile How to
                Download YouTube Videos to Gallery on Mobile
              </p>
            </div>
            <div className="packs-links">
              <ul>
              <li>
              <a href="https://www.blackmagicdesign.com/products/davinciresolve/"  target="_blank">
                Davanci Resolve
              </a>
            </li>
              </ul>
            </div>
          </div>
         </div>
        </div> 
        
        </div>
      </div>
    );
  }
}
