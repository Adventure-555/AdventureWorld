import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/" className="hide" >.</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Video" className="video">Videos</Link>
        <Link to="/packs">Packs</Link>
      </header>
    );
  }
}
