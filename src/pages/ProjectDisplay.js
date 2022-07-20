import React from "react";
import {useParams} from "react-router-dom";
import {ProjectList} from "../utils/ProjectList";
import {FaGithub} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";


function ProjectDisplay () {

    const {id} = useParams ();
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} alt={project.alt} width="700px"/>
            <p>
                <b>Skills:</b> {project.tech}
            </p>
            <p>
                <b>Description:</b> {project.description}
            </p>

            <a href={project.git} target="blank"><FaGithub />
            </a>
            <a href={project.url} target="blank">
            <CgWebsite /> 
            </a>
        
        </div>
    );
}

export default ProjectDisplay;