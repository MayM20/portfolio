import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Contact from './components/Contact';
import ParticlesComponent from './components/ParticlesComponent';
import ProjectsContainer from './components/projectsContainer';

import './styles/base.scss';

class App extends Component {
  render() {
    return (
    <Router>
        <ParticlesComponent />
          <Nav/>    
          <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              <Route path="/" render={() => <ProjectsContainer title="Some Projects" />} />
              <Route path='/contact' component={Contact} />
          </Switch>
    </Router>
    );
  }
}

export default App;
