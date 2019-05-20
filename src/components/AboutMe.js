import React, {Component} from 'react';

class AboutMe extends Component{
    render(){
        return(
        <div>
            <section className="about-me-section" id="about-me">
                <div className="maylen_picture">
                <img src={require('../images/maylen_picture.png')} alt=""></img>
                </div>
                <div className="row">
                <div className="maylen_description">
                <h2>Creating engaging, purposeful, easy to use and user-friendly websites is truly a passion of mine.</h2>
                <p>I am able to work in all phases of the product development cycle. My unique skillset provides me with the ability to not only build a solution from the ground up, but also assess and address challenges with creative problem solving tactics.</p>
                <p>Generating a well-conceived solution takes continual practice. Although there are both right and wrong answers to a problem, the distinction is not always black and white. Instead, reaching the correct answer equates to moving along a spectrum. How close are you to the correct answer and how do you surpass that qualification with a great solution? That’s my sweet-spot.</p>
                </div>
                </div>
            </section>
        </div>
        );
    }
}

export default AboutMe;