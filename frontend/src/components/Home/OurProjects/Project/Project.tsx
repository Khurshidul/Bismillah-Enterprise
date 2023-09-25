import React from "react";
import "../Projects/Projects.css";
import { Iservices } from "../AllProjects/AllProjects";
import { Image } from "react-bootstrap";

interface PropTypes {
  project: Iservices;
}

const Project: React.FC<PropTypes> = ({ project }) => {
  return (
    // <div className="container">
      <div className="project-card">
        <Image src={project.poster} alt="project" fluid/>
        <div className="info">
          <h3>{project.projectTitle}</h3>
        <p className="project-desp">{project.description}</p>
        
        </div>
      </div>
    // </div>
  );
};

export default Project;
