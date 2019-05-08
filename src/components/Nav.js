import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const logo = require('../images/logo_maylen.png');//for reusability

export default class Nav extends Component{

  render(){
    // let classHide=this.state.isHide? "hide":""
    return(
      // <nav className={"navbar navbar-expand-lg navbar-light bg-transparent fixed-top"+classHide}></nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
        <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          <img src={logo} className="logo" alt="logo"/>
        </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link exact to={'/'} className="nav-link current">Portfolio</Link></li>
            <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
            <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
        </div>
        </div>
        </nav>
    );
  }
}