import React from "react";
import ProjectList from "../data/projects";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Nav from "./Nav";

const Projects = props => {
  let projects = ProjectList.map((project, i) => {
    const differImage =
      project.projectDisplay.type === "image" ? "img-fluid" : "special-class";

    const alternatingColor = ["#ffd3dd", "#fff9c7", "#d4eedb", "#ffcec7"];

    return (
      <div key={i} className="project">
        <Link to={`/${project.url}`}>
          <div
            style={{ backgroundColor: alternatingColor[i] }}
            className="image"
          >
            <div className="hover">Visit Project -></div>
            <img
              src={project.projectDisplay.url}
              className={`${differImage}`}
              alt=""
            />
          </div>
        </Link>
        <div className="details">
          <div className="title">{project.projectName}</div>
          <div className="description">{project.shortProjectDescription}</div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      {/* <Nav /> */}
      <Banner />
      <div className="main-content" id="portfolio-section">
        <div className="container">{projects}</div>
      </div>
      <AboutMe />
    </React.Fragment>
  );
};

export default Projects;
