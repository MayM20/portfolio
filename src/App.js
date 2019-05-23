import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/ParticlesComponent";
import ProjectsContainer from "./components/projectsContainer";
import "./styles/base.scss";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    // const { location } = this.props;
    return (
      <Router>
        <ScrollToTop>
          <ParticlesComponent />
          {/* {location.pathname !== "/exclusion-path" && <Nav />} */}
          <Nav />
          <Switch>
            <Route
              path="/"
              render={() => <ProjectsContainer title="Some Projects" />}
            />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
