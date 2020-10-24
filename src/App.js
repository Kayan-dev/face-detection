import React from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Particles from "react-particles-js";
import HomePage from "./Pages/HomePage";

const ParticleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
function App() {
  return (
    <div className="App">
      <Particles className="particles" params={ParticleOptions} />
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
