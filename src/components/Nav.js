import React from "react";
import {Link} from "react-router-dom";

function Nav () {
    return (
        <div className="nav">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    );
}

export default Nav;