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
            <img src={project.image} alt={project.alt}/>
            <p>
                <b>Skills:</b> {project.tech}
            </p>
            <p>
                <b>Description:</b> {project.description}
            </p>

            <FaGithub /> {project.git}
            <CgWebsite /> {project.url}
        
        </div>
    );
}

export default ProjectDisplay;