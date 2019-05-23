import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
  return (
    <React.Fragment>
      <section className="project-container-heading" id="project-container">
        <div className="project-detail-description">
          <div>
            <Link className="back" to="/">
              <p>Go back to projects</p>
            </Link>
          </div>
          <h1>{props.name}</h1>
          <p>{props.projectType}</p>
          <a
            href={props.projectLink}
            className="visit-project"
            title={`Visit ${props.name}`}
          >
            Visit Website
          </a>
        </div>
      </section>

      <section className="project-container-description">
        <div className="project-details">
          <div className="brief2">
            <h4>Brief</h4>
            <p dangerouslySetInnerHTML={{ __html: props.projectBrief }} />
          </div>

          <div className="result2">
            <h4>Results</h4>
            <p dangerouslySetInnerHTML={{ __html: props.projectResult }} />
          </div>

          <div className="technologies2">
            <h4>Technologies used</h4>
            <ul>
              {props.projectTechs.map(singleTech => {
                return <li key={singleTech}>{singleTech}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="project-images">
        <div className="container">
          <ul>
            {props.images.map(singleImage => {
              return (
                <li key={singleImage}>
                  <img src={singleImage} className="img-fluid" alt="example" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Project;
