import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Welcome.css";

export default class Welcome extends Component {
    render() {
        return (
           <div className="welcome-section">
                <div className="welcome-container">
               <span className="text-1">Welcome to</span>
               <span className="text-2">Adventure World</span>
               <div className="next-section">
                   <Link to="/Home" ><button>Next</button></Link>
               </div>
            </div>
           </div>
        )
    }
}
