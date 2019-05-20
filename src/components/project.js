import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    console.log('testing', props);
//     console.log('type of image', typeof props.images);
    console.log('checking if images is an object', typeof props.images === 'object');
    console.log('is a string?', typeof props.images === 'string');
    console.log('object', typeof props === 'object');
    return (
<div>
    <section className="project-container-heading">
            <div className="project-detail-description">
               <div><Link className="back" to="/">BACK</Link></div>
                    <h2>{props.id}</h2>
                    <h1>{props.name}</h1>
                    <p>{props.projectType}</p>
                    <a href={props.projectLink}className="visit-project">Visit Website</a>
            </div>
    </section>

    <section className="project-container-description">
            <div className="project-details">
            <div className="brief2">
            <h4>Brief</h4>
            <p dangerouslySetInnerHTML={{ __html: props.projectBrief }}/>
            </div>

            <div className="result2">
            <h4>Results</h4>
            <p dangerouslySetInnerHTML={{ __html: props.projectResult }}/>
            </div>

            <div className="technologies2">
            <h4>Technologies used</h4>
            <p>{props.projectTechs}</p>
            </div>
            </div>  
    </section>

    <section className="project-images">
                <img src={props.images} className="img-fluid" alt=""></img>
    </section>
</div>
        
    );
}

export default Project;