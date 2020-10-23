import React from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/Form/ImageLinkForm";
import FaceRecognition from "./components/Recognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Particles from "react-particles-js";

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
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
