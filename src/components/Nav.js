import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const logo = require('../images/logo_maylen.png');//for reusability

export default class Nav extends Component{
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
  collapsed: !this.state.collapsed,
  });
}
componentDidMount() {
  document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 200;
    if (isTop !== this.state.isTop) {
        this.setState({ isTop, backgroundColor: 'red' })
    }
  });
}
// componentDidMount() {
//   window.addEventListener('scroll', this.listenToScroll);
//   this.listenToScroll();
// }

// componentWillUnmount() {
//   window.removeEventListener('scroll', this.listenToScroll);
// }

// listenToScroll = () => {
//   // const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

//   // const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;

//   // const scrolled = winScroll / height;
//   // console.log('scroll event');
//   // // console.log(e);

//   // this.setState({
//   //   theposition: scrolled,
//   // })
//     // const { top } = this.wrapRef.getBoundingClientRect();
//     // if (top > 20 && top < 100 && !this.state.isActive) {
//     //   this.setState({ isActive: true });
//     // }
//     // if ((top <= 20 || top >= 100) && this.state.isActive) {
//     //   this.setState({ isActive: false });
//     // }
// }


  render(){
    //MOBILE
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    // const navbarcolor = this.state ? 'navbar';
    const scrolled = this.state.isTop;
    const classThird = scrolled ? 'bg-light' : 'bg-transparent';
    
    //NAVBAR
    const styles = {
      navBarStyle: {
        backgroundColor: this.state.backgroundColor,
      }
    }
    const { navBarStyle } = styles;
    const { isActive } = this.state;
    
    return(
      <nav onScroll={this.listenToScroll} className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top" style={navBarStyle}>
      {/* <div style={{ height: '200vh' }}>
        <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'up'}!</h2>
      </div> */}
      {/* // <nav onScroll={this.listenToScroll} className={"navbar navbar-expand-lg navbar-light bg-transparent fixed-top `scroll-item ${isActive && 'scroll-item-active'}`"}> */}
        <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          <img src={logo} className="logo" alt="logo"/>
        </Link>
        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> */}
                <span className="navbar-toggler-icon"></span>
  </button>
        <div className={`${classOne}`} id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to={'/'} className="nav-link current">Portfolio</Link></li>
            <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
            <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
        </div>
        </div>
        </nav>
    );
  }
}