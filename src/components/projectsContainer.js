import React from 'react';
import ProjectList from '../data/projects';
import Project from './project';
import Projects from './projects';
import { Route} from 'react-router-dom';

const ProjectsContainer = (props) => {
    let proUrl = ProjectList.map((project, i) => {
        return (
          <Route key={i} path={`/${project.url}`} render={() => 
          <Project name={project.projectName}
          image={project.projectDisplay} 
          images={project.projectImages} 
          details={project.shortProjectDescription} 
          projectType={project.typeOfProject} 
          projectBrief={project.longProjectDescription.projectBrief} 
          projectResult={project.longProjectDescription.projectResult} 
          projectTechs={project.longProjectDescription.projectTechs}
          projectLink={project.projectUrl}
          />} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/" render={() => <Projects title="Projects"/>} />
          {proUrl}
        </React.Fragment>
    );
}

export default ProjectsContainer;