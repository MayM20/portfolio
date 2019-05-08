import React, {Component} from 'react';
import Home from './Home';

class About extends React.Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div>
                <h2>This is my About Page {2+2}</h2>
            </div>
        );
    }
    
}
export default About;