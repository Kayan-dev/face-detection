import React, { useState } from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/Form/ImageLinkForm";
import FaceRecognition from "./components/Recognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai, { COLOR_MODEL } from "clarifai";

const app = new Clarifai.App({
  apiKey: "b4723ee82b5049b6a08801926886ff93",
});
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
  const [input, SetInput] = useState("");

  const onInputChange = (event) => {
    console.log("event", event.target.value);
    SetInput(event);
  };
  const onSubmitChange = (event) => {
    console.log("click");
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
  };
  return (
    <div className="App">
      <Particles className="particles" params={ParticleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onSubmitChange={onSubmitChange}
      />
      <FaceRecognition />
    </div>
  );
}

export default App;
