import React, {Component} from 'react';
import PROJECTS from '../data/projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class ProjectImages extends Component{
    render(){
        return(
        <div>
            <section className="project-images">
            <img src={require('../images/screenshot_qube.png')} className="img-fluid" alt=""></img>
            </section>
        </div>
        );
    }
}

class ProjectDescription extends Component{
    render(){
    return(
        <div>
           <section className="project-container-description">
            <div className="project-details">
            <div className="brief2">
            <h4>Brief</h4>
            <p>Qube Kaffeine &amp; Kithcen is a coffee shop located in Castle Towers.</p>
            <p>Having a website for it will serve to help brand and market the company by offering an overview of the best prepared coffee in the area, complemented with mediterranean fusion cuisine.</p>
            <p>The brief was to create an online presence and work as a marketing tool to attract potential customers. Therefore, increasing sales.
 </p>
            </div>

            <div className="result2">
            <h4>Result</h4>
            <p>Pulling inspiration from the coffee shop colours, alongside enticing visuals, a website is constructed, which improved the user experience, increasing the retention rate and general enquiries across the board.</p>
            <p>Using CSS Media Queries, the website structure is fully responsive, compatible on a large variety of platforms and increasing the customer reach.</p>
            </div>

            <div className="technologies2">
            <h4>Technologies used</h4>
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Photoshop</li>
            </ul>
            </div>
            
            </div>
            
            </section>
        </div>
    );
    }
}

class ProjectHeading extends Component{
    render(){
    
 
    return(
        <div>
            <section className="project-container-heading">
            <div className="project-detail-description">
            {/* {
                  Data.projects.map((project, index) => {
                    return (
                      <div key={index}>
                          <h1>{project.projectName}</h1>
                          <h2>{project.projectDescription}</h2>
                      </div>
                    )
                  })
                } */}
                    <h1>{PROJECTS[0].projectName}</h1>
                    <p>{PROJECTS[0].typeOfProject}</p>
                    <a href="#sth" className="visit-project">Visit Website</a>
            </div>
            </section>
        </div>
    );
    }
}

//THIS COMPONENT IS A CHILD COMPONENT OF HOME COMPONENT
export default class ProjectDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {}
      }

//       //Function which is called when the component loads for the first time
//   componentDidMount() {
//     this.getProjectDetails(this.props.val)
//   }

//   //Function which is called whenver the component is updated
//   componentDidUpdate(prevProps) {

//     //get Project Details only if props has changed
//     if (this.props.val !== prevProps.val) {
//       this.getProjectDetails(this.props.val)
//     }
//   }

//   //Function to Load the projectdetails data from json.
//   getProjectDetails(id) {
//     axios.get('assets/samplejson/customer' + id + '.json').then(response => {
//       this.setState({projectDetails: response})
//     })
//   };
    
      render(){
        // if (!this.state.projectDetails)
        console.log(this.props)
        const { params } = this.props.match
          return(
              <div>
                  <ProjectHeading/>
                  <p>{params.id}</p>
                  <ProjectDescription/>
                  <ProjectImages/>
              </div>
          );
      }
}
