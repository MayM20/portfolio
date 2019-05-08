import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import ProjectDetail2 from './components/ProjectDetail2';
import ParticlesComponent from './components/ParticlesComponent';

import './styles/base.scss';

class App extends Component {
  render() {
    var user = {
      name: "Rob", 
      hobbies: ["eat", "work"]
    };
    return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticlesComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          {/* we can render <Route> and <NavTabs /> here */}
          <Nav/>    
          {/* <Home name={"Marco"} age={27} user={user}/>   */}
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path="/project/:id" render={props => <ProjectDetail text="Hello, " {...props} />}/>
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
