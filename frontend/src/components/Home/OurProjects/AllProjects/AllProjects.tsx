import React from "react";
import { useQuery } from "react-query";
import fetchData from "../../../FetchData/fetchData";
import Project from "../Project/Project";

interface PropTypes {}
export type Iservices = {
  _id: string;
  projectTitle: string;
  poster: string;
  description: string;
  img2: string;
  img3: string;
  img4: string;
};
const AllProjects: React.FC<PropTypes> = () => {
  const { data } = useQuery("services", () =>
    fetchData("http://localhost:5000/services"),
  );
  return (
    <div className="mat-container">
      <h1 className="title-projects">Our Projects</h1>
      <div className="container">
        <div className="projects">
          {data.map((project: Iservices) => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
