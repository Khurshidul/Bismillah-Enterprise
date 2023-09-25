import React, { useState } from "react";
import "./Projects.css";
import { Iservices } from "../AllProjects/AllProjects";
import Project from "../Project/Project";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import fetchData from "../../../FetchData/fetchData";

interface PropTypes {}

const Projects: React.FC<PropTypes> = () => {
  const { data } = useQuery("services", () =>
    fetchData("http://localhost:5000/services"),
  );
  const [noOfProjects, setNoOfProjects] = useState<any>(4);
  const sliceData = data.slice(0, noOfProjects);
  const loadMore = () => {
    setNoOfProjects(noOfProjects);
  };
  return (
    <div className="project-container">
      <h1 className="title-projects">Our Projects</h1>
      <div className="container">
        <div className="projects">
          {sliceData.map((project: Iservices) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      </div>
      <Link to={"/projects"}>
        <button
          className="more-projects"
          onClick={() => {
            loadMore();
          }}>
          View All
        </button>
      </Link>
    </div>
  );
};

export default Projects;
