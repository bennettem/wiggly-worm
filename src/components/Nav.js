import React, { useEffect, useState } from "react";
import { NavLink, useLocation} from "react-router-dom";
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
            <NavLink to="/" activeClassName="highlighted">Home</NavLink>
                <NavLink to="/projects" activeClassName="highlighted">Projects</NavLink>
                <NavLink to="/contact" activeClassName="highlighted">Contact</NavLink>
                <NavLink to="/resume" activeClassName="highlighted">Resume</NavLink>
            </div>
        </div>
    );
}

export default Nav;