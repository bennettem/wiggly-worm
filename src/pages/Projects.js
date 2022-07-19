import React from "react";
import ProjectItem from "../components/ProjectItem";
import codingNkolbolds from "../assets/codingNkolbolds.jpg";
import dice from "../assets/dice.png";
import number from "../assets/number.png";
import robot from "../assets/robot.png";
import where2 from "../assets/where2.png";

function Projects () {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectList">
                <ProjectItem name="Coding N Kolbolds" image={codingNkolbolds}/>
                <ProjectItem name="Dice Game" image={dice}/>
                <ProjectItem name="Number Game" image={number}/>
                <ProjectItem name="Robot Gladiator" image={robot}/>
                <ProjectItem name="Where2 Travel" image={where2}/>
            </div>
        </div>
    );
}

export default Projects;