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
  const [image, Set_Image] = useState("");
  const [input, Set_Input] = useState("");

  const onInputChange = (event) => {
    Set_Input(event.target.value);
  };

  const onSubmitChange = (event) => {
    Set_Image(input);
    console.log("image", image);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      function (response) {
        console.log(
          "Regions:",
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
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
      <FaceRecognition imageUrl={image} />
    </div>
  );
}

export default App;
