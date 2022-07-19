import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import {CgMenu} from "react-icons/cg"

function Nav () {
    const [expandNav, setExpandNav] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNav(false)
    }, [location]);

    return (
        <div className="nav" id={expandNav ? "open" : "close"}>
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