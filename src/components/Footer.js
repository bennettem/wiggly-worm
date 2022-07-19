import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer () {
    return (
        <div className="footer">
            <div className="socialMedia">
            <a href="https://www.linkedin.com/in/epbennett/" target="blank">
            <FaLinkedin />
            </a>
            <a href="https://github.com/bennettem" target="blank">
            <FaGithub />
            </a>
            <a href="https://twitter.com/embennett00" target="blank"><FaTwitter />
            </a>
            </div>
            <p>&copy; 2022 github pages</p>
        </div>
    );
}

export default Footer;