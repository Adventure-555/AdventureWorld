import React, { Component } from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Video from "./Component/Videos/Video";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Component/Welcome/Welcome";
import Description from "./Component/Description/Description";
import Links from "./Component/Description/sections/Links";
import Code from "./Component/Description/sections/Code";
import Appsection from "./Component/Description/sections/Appsection";
import Otherfile from "./Component/Description/sections/Otherfile";


export default class App extends Component {
  render() {
    return (
      <div>
           <Router>
        <Header/>
        <Route path="/AdventureWorld" exact component={Welcome} />
          <Route path="/Home"   component={Home}/>
          <Route path="/Video"  component={Video}/>
          <Route path="/Description"  component={Description}/>
          <Route path="/Links" component={Links}/>
          <Route path="/Code" component={Code}/>
          <Route path="/Appsection" component={Appsection}/>
          <Route path="/Otherfile" component={Otherfile}/>
        </Router>   
      </div>
    );
  }
}
