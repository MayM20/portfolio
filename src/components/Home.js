import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export class Home extends React.Component{
    render(){
        console.log(this.props);

        // var text = "Something";
        // var project = {
        //     projectName: "MaylenTesting", 
        //     projectDescription: ["cantar", "jugar"]
        //   };
        //   const greeting = 'Welcome to React Maylen';
        return(
    <div>
    <section className="cover-section">
    <div className="cover">
    
        <div className="full-description">
        {/* <img src={require('../images/logo_maylen.png')} className="logo"></img> */}
            <h1 className="intro-name">Hi! I'm Maylen</h1>
            {/* <h1>Your name is {this.props.name}</h1>
            <h1>User object => {this.props.user.name}</h1> */}
            <p className="intro-description">I create engaging, purposeful, easy to use and user-friendly websites.
            Checkout some of my work or get in touch.</p>
            <div className="buttons">
            <a className="work btn" href="#">See work</a>
            <a className="contact-btn btn" href="#"><i className="fas fa-envelope"></i>Contact Me</a>
            </div>
            <div className="links">
        <ul>
        <li><a href="https://github.com/MayM20" id="git" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com/in/maylen-medina20/" id="linkedin" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a></li>
        <li><a href="#" id="facebook" target="_blank"><i class="mr-3 fab fa-facebook-square fa-2x"></i></a></li>
        </ul>
        </div>
        </div>
    </div>
    </section>

     <section className="portfolio-section">
     <div className="container">
     <div className="row">
     <div className="col-sm-12 col-md-6">

     <div className="project left">
     <a href="https://maym20.github.io/qube-v2/" target="_blank">
     <div className="image m">
     <div className="hover">
     Visit Project ->
     </div>
     <img src={require('../images/screenshot_qube.png')} className="img-fluid"></img>
     
     </div>
    </a>
    <div className="details">
    <div className="title">Qube Kaffeine &amp; Kitchen</div>
    <div className="description">
    Brochure website to help brand and market the coffee shop by offering an overview of the best prepared coffee in the area, complemented with mediterranean fusion cuisine. As well as portraying an image of the business, giving visitors an idea of the atmosphere before even stepping a foot inside.

                  </div>
    </div>
     </div>
     </div>
     <div className="col-sm-12 col-md-6">

    <div className="project right">
    <a href="https://github.com/MayM20/IonicProject" target="_blank">
    <div className="image c">
     <div className="hover">
     Visit Project ->
     </div>
     <img src="https://camo.githubusercontent.com/ab8fd0b4a5966158ba22648de8ab605085821c32/687474703a2f2f672e7265636f726469742e636f2f437034487061497a4e542e676966" className="img-fluid" id="specialClass"></img>
     
     </div>
    </a>

    <div className="details">
    <div className="title">Meet ~ Talk: Chat App</div>
        <div className="description">
        One-on-one chat application where travelers, international students and people who just recently met, connect to talk with each other by creating an account and adding their email address.
        </div>
    </div>
    </div>

     </div>
     </div>

     <div className="row">
     <div className="col-sm-12 col-md-6">

     <div className="project left">
     <Link to="/project/id">Rendering with React
     {/* <a href="#" target="_blank"> */}
     <div className="image r">
     <div className="hover">
     Visit Project ->
     </div>
     <img src={require('../images/screenshot_todolist1.png')} className="img-fluid" id="specialClass"></img>
     
     </div>
     {/* </a> */}
     </Link>
    <div className="details">
    <div className="title">Maylen 2-DO List</div>
                <div className="description">
                Is a simple to-do cross platforms application that helps you to get stuff done. Making it easier to monitor your to-dos.
                </div>
    </div>
     </div>
     </div>
     <div className="col-sm-12 col-md-6">

    <div className="project right">
    <Link to="/project/id2">Rendering with React
    {/* <a href="https://livingthrough.info/" target="_blank"> */}
    <div className="image i">
     <div className="hover">
     Visit Project ->
     </div>
     <img src={require('../images/logo_adv-studio.png')} className="img-fluid"></img>
     
     </div>
     </Link>
    {/* </a> */}

    <div className="details">
    <div className="title">Living Through</div>
    <div className="description">
    The project is developed in the hope of bringing more meanings to life by helping young people having a basic understanding about suicide,  identify the warning signs and how to start a conversation in order to prevent it or even help themselves.

                  </div>
    </div>
    </div>

     </div>
     </div>
     </div>
     </section>

    <section className="about-me-section" id="about-me">
    <div className="maylen_picture">
    <img src={require('../images/maylen_picture.png')}></img>
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
export default Home;