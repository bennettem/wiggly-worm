import React, { useState } from "react";
import {Link} from "react-router-dom";
import {CgMenu} from "react-icons/cg"

function Nav () {
    const [expandNav, setExpandNav] = useState(false);

    return (
        <div className="nav">
            <div className="toggleButton">
                <button onClick={() => {
                    setExpandNav((prev) => !prev);
                    }}
                    >
                    <CgMenu />
                </button>
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