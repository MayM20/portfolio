import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <section className="bg-keyboard contact-me-section">
    <div className="">
    
        <div className="full-description contact">
            <h1 className="name">Let's connect</h1>
            <p className="description">I’m interested in chatting about design, feel free to connect with me on any of the social platforms below.</p>
            <div className="links">
                <ul>
                <li><a href="https://github.com/MayM20" id="git"><i class="fab fa-github fa-2x"></i></a></li>
                <li><a href="#" id="linkedin" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a></li>
                <li><a href="#" id="facebook" target="_blank"><i class="mr-3 fab fa-facebook-square fa-2x"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <img src={require('../images/standing_girl.png')} className="standing"></img>
    </section>

        );
    }
}