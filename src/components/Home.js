// import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Banner from './Banner';
// import AboutMe from './AboutMe';
// import PROJECTS from '../data/projects';

// class Project extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedProject: 1
//         }
//     }

//     render(){
//         console.log('this.state.props', this.props);

//         const { projectName, projectUrl, shortProjectDescription, projectImages } = this.props.project;

//         // const { projectName, typeOfProject, projectDescription } = this.props.object;

//         //this is is the equivalent as the above
//         // const projectName = this.props.project.projectName;
//         // const typeOfProject = this.props.project.typeOfProject;

//         return(
            
//         <div className="col-sm-12 col-md-6">
//             <div className="project left">
//             {/* <Link to={`/${PROJECTS.id}`} onClick={() => this.setState({selectedProject: PROJECT.id})}></Link> */}
//             <Link to={`/:id`}>
//                     <div className="image">
//                     <div className="hover">Visit Project -></div>
//                     <img src={require('../images/screenshot_qube.png')} className="img-fluid"></img>
//                     </div>
//             </Link>
//                 <div className="details">
//                     <div className="title">{projectName}</div>
//                     <div className="description">{shortProjectDescription}</div>
//                 </div>
//             </div>
//         </div>
            
//         );
//     }
// }

// export class Home extends Component{
//     render(){   
//         return (
//         <div>
//             <Banner/>
//                 <section className="portfolio-section">
//                 <div className="container">
//                 <div className="row">
//                     {
//                         PROJECTS.map(PROJECT => {
//                             return(
//                                 <Project key={PROJECT.id} project={PROJECT}/>
//                             )
//                         })
//                     }
//                 </div>
//                 </div>
//                 </section>
//             <AboutMe/>
//      </div>
//         );
//     }
    
// }
// export default Home;