import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-me-section" id="about-me" name="about-me">
          <div className="maylen_picture">
            <img src={require("../images/maylen_picture.png")} alt="" />
          </div>
          <div className="row">
            <div className="maylen_description">
              <h2>
                Creating engaging, purposeful, easy to use and user-friendly
                websites is truly a passion of mine.
              </h2>
              <p>
                I have always been interested in knowing the why of things:
                "What, how and why"- I think that's what you're going to hear
                from me most of the time. This has led me to complete my
                Bachelor of IT, where I gained hands-on experience developing
                websites and mobile applications from backend to frontend,
                database and computer science.
              </p>
              <p>
                I discovered that while I combine technology with these
                questions, I can create interfaces that influence the user to
                achieve a certain purpose. For me, creating an unforgettable
                experience in the user is one of them.
              </p>
              <p>
                Currently, I work as a freelancer. Drop me an email for any new
                opportunities.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutMe;
