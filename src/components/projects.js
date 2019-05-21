import React from 'react';
import ProjectList from '../data/projects';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import AboutMe from './AboutMe';



const Projects = (props) => {
    let projects = ProjectList.map((project, i) => {
      

      const differImage = project.projectDisplay.type === "image" ? 'img-fluid' : 'special-class'; 

      return (

        <div key={i} className="project">
        <Link to={`/${project.url}`}>
        <div className="image m">
        <div className="hover">
        Visit Project ->
        </div>
        <img src={project.projectDisplay.url} className={`${differImage}`} alt=""></img>
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
      <Banner/>
      {/* <section className="portfolio-section">
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-6"> */}
        <div className="main-content" id="portfolio-section">
        <div className="container">
        {projects}
        </div>
        </div>
        <AboutMe/>
        {/* </div>
        </div>
        </div>
        </section> */}
        <Footer/>
        </React.Fragment>
    );
}

export default Projects;