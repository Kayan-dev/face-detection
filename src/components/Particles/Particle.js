import "./Particles.css";
// import face from "./male_face.svg";

export const ParticleOptions = {
  fps_limit: 28,
  particles: {
    number: {
      value: 105,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 300,
        size: 10,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },

  // Below is another option for particle visualization:

  // particles: {
  //   collisions: {
  //     enable: false,
  //   },
  //   number: {
  //     value: 200,
  //     density: {
  //       enable: false,
  //     },
  //   },

  //   line_linked: {
  //     enable: true,
  //     distance: 30,
  //     opacity: 0.4,
  //   },
  //   move: {
  //     speed: 1.5,
  //   },
  //   opacity: {
  //     anim: {
  //       enable: true,
  //       opacity_min: 0.05,
  //       speed: 1,
  //       sync: false,
  //     },
  //     value: 0.4,
  //   },
  // },
  // polygon: {
  //   enable: true,
  //   scale: 1,
  //   type: "inline",
  //   move: {
  //     radius: 20,
  //   },
  //   url: "https://cdn.matteobruni.it/images/particles/smalldeer.svg",
  //   inline: {
  //     arrangement: "equidistant",
  //   },
  //   draw: {
  //     enable: true,
  //     stroke: {
  //       color: "rgba(255, 255, 255, .2)",
  //     },
  //   },
  // },
  // retina_detect: false,
  // interactivity: {
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "bubble",
  //     },
  //   },
  //   modes: {
  //     bubble: {
  //       size: 6,
  //       distance: 40,
  //     },
  //   },
  // },
};
