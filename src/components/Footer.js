import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section className="contact-me-banner" id="contact-section">
        <div className="contact">
          <h1 className="contact-me-title">Let's connect</h1>
          <p className="subtitle">
            I’m interested in chatting about development, design and new
            projects. Feel free to connect with me on any of the social
            platforms below.
          </p>
          <div className="links">
            <ul>
              <li>
                <a href="https://github.com/MayM20" id="git">
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/maylen-medina20/"
                  id="linkedin"
                >
                  <i className="fab fa-linkedin-in fa-2x" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/maymedinag" id="facebook">
                  <i className="mr-3 fab fa-facebook-square fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          src={require("../images/standing_girl.png")}
          className="standing"
          alt=""
        />
      </section>
    );
  }
}
