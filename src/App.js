import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/ParticlesComponent";
import ProjectsContainer from "./components/projectsContainer";
import "./styles/main.scss";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <ParticlesComponent />
          <Nav />
          <Banner />
          <Switch>
            <Route
              path="/"
              render={() => <ProjectsContainer title="Some Projects" />}
            />
          </Switch>
          <AboutMe />
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
