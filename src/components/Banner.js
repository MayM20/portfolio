import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Banner extends Component {
  render() {
    return (
      <section className="intro-banner" id="banner-section">
        <div className="cover">
          <div className="banner-content">
            <h1 className="banner-title">
              Hi! I'm Maylen,
              <br />a front-end developer.
            </h1>
            <div className="buttons">
              <AnchorLink
                offset="100"
                className="work-btn btn"
                href="#portfolio-section"
              >
                See work
              </AnchorLink>
              <AnchorLink className="about-btn btn" href="#about-me">
                About
              </AnchorLink>
              <AnchorLink className="contact-btn btn" href="#contact-section">
                <i className="fas fa-envelope" />
                Contact
              </AnchorLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Banner;
