import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const logo = require("../images/logo_maylen.png"); //for reusability

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      isTop: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  componentDidMount() {
    document.addEventListener("scroll", this.listenToScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const isTop = window.scrollY < 800;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  };

  render() {
    //MOBILE
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    const scrolled = this.state.isTop
      ? "navbar navbar-expand-lg navbar-light bg-transparent fixed-top"
      : "navbar navbar-expand-lg navbar-light bg-light fixed-top";

    return (
      <nav onScroll={this.listenToScroll} className={`${scrolled}`}>
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link current">
                  Portfolio
                </Link>
              </li>
              {/* <li className="nav-item"><AnchorLink href="#banner-section" className="nav-link current">Portfolio</AnchorLink></li> */}
              <li className="nav-item">
                <AnchorLink href="#about-me" className="nav-link">
                  About
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink href="#contact-section" className="nav-link">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
