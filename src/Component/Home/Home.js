import React, { Component } from "react";
import "./Home.css";
// import share from './image/share.png';
import gem from './gem.svg';
import bubble from "./image/bubble.png";
export default class Home extends Component {
  linkCopy = () => {
    navigator.clipboard.writeText("http://adventure-555.github.io/AdventureWorld");
    alert("Link is Copy to your Clipboard");
  };

  render() {
    return (
      <div className="home-container">
        <div className="h1-section">
          <h1>
           <img src={gem} alt="gem" /> Welcome to <br /> Adventure World
          </h1>
        </div>
        <div className="link-section">
          <h1 className="share" onClick={this.linkCopy}>
            <i class="fas fa-share-alt"></i>
          </h1>
          <a
            href="https://youtube.com/channel/UCh2MhM9BlGVIDu7vdph1H2g"
            className="youtube"
          >
            <h1>
              <i class="fab fa-youtube"></i>
            </h1>
          </a>
          <a
            href="https://www.facebook.com/adhnan.shereef"
            className="facebook"
          >
            <h1>
              <i class="fab fa-facebook"></i>
            </h1>
          </a>
          {/* <img src={share} className="share" alt="share"/>
            <img src={fb} className="fb" alt="fb"/> */}
        </div>
        <div className="bubbles">
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
          <img src={bubble} alt="bubble" />
        </div>

        <footer>
          Design And Devoleped By <span>Adventure World</span>
        </footer>
      </div>
    );
  }
}
