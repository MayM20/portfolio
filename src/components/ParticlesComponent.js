import React, { Component } from "react";
import Particles from "react-particles-js";

export default class ParticlesComponent extends Component {
  render() {
    return (
      <div className="style-particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1803.4120608655228
                }
              },
              color: {
                value: ["#B8E986", "#50E3C2", "#FFD300", "#E86363"]
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#b6b2b2"
                },
                polygon: {
                  nb_sides: 4
                },
                image: {
                  src: "img/github.svg",
                  width: 200,
                  height: 200
                }
              },
              opacity: {
                value: 0.4008530152163807,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 8.017060304327615,
                random: true,
                anim: {
                  enable: false,
                  speed: 12.181158184520175,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 0,
                color: "#ffffff",
                opacity: 0.3687847739990702,
                width: 0.6413648243462091
              },
              move: {
                enable: true,
                speed: 1, //speed of bubbles, before was 6 too fast
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out", //whats the difference with bounce
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: false,
                  mode: "bubble"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 100,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>
    );
  }
}
