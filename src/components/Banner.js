import React, {Component} from 'react';

class Banner extends Component{
    render(){
    return(
    
    <section className="cover-section">
    <div className="cover">
    
        <div className="full-description">
        {/* <img src={require('../images/logo_maylen.png')} className="logo"></img> */}
            <h1 className="intro-name">Hi! I'm Maylen</h1>
            <p className="intro-description">I create engaging, purposeful, easy to use and user-friendly websites.
            Checkout some of my work or get in touch.</p>
            <div className="buttons">
            <a className="work btn" href="#this-portfolio">See work</a>
            <a className="contact-btn btn" href="#contact-section"><i className="fas fa-envelope"></i>Contact Me</a>
            </div>
            <div className="links">
        <ul>
        <li><a href="https://github.com/MayM20" id="git"><i className="fab fa-github fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com/in/maylen-medina20/" id="linkedin"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
        <li><a href="https://github.com/MayM20" id="facebook"><i className="mr-3 fab fa-facebook-square fa-2x"></i></a></li>
        </ul>
        </div>
        </div>
    </div>
    </section>
    
    );
    }
}
export default Banner;