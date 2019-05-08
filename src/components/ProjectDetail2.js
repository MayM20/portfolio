import React, {Component} from 'react';

export default class ProjectDetail extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return(
            <div>
            <section className="project-container-heading">
            <div className="project-detail-description">
                    <h1>Qube Kaffeine &amp; Kitchen.</h1>
                    <p>Web Design &amp; Development</p>
                    <a href="#" className="visit-project">Visit Website</a>
            </div>
            </section>

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

            <section className="project-images">
            <img src={require('../images/screenshot_qube.png')} className="img-fluid"></img>
            </section>
            </div>
        );
    }
}