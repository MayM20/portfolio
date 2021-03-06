import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/ParticlesComponent";
import ProjectsContainer from "./components/projectsContainer";
import "./styles/main.scss";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (
      // <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <ParticlesComponent />
        <Nav />
        <Switch>
          <Route
            path="/"
            render={() => <ProjectsContainer title="Some Projects" />}
          />
        </Switch>
        <Footer />
      </ScrollToTop>
      // </Router>
    );
  }
}

export default App;
