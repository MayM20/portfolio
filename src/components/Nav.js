import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const logo = require("../images/logo_maylen.png"); //for reusability

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-transparent">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
      </nav>
    );
  }
}
export default withRouter(Nav);
