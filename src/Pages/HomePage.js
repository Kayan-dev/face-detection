import React, { useState } from "react";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/Form/ImageLinkForm";
import FaceRecognition from "../components/Recognition/FaceRecognition";
import SignIn from "../components/SignIn/SignIn";
import Rank from "../components/Rank/Rank";
import Clarifai, { COLOR_MODEL } from "clarifai";
import Navigation from "../components/Navigation/Navigation";
import Register from "../components/Register/Register";

const app = new Clarifai.App({
  apiKey: "b4723ee82b5049b6a08801926886ff93",
});

export default function HomePage() {
  const [image, Set_Image] = useState("");
  const [input, Set_Input] = useState("");
  const [box, Set_Box] = useState({});
  const [route, Set_Route] = useState("signin");

  const calcFaceLocation = (data) => {
    console.log("What is data", data);
    const faceLocation =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const boxImage = document.getElementById("inputImage");
    const width = Number(boxImage.width);
    const height = Number(boxImage.height);

    return {
      leftCol: faceLocation.left_col * width,
      topRow: faceLocation.top_row * height,
      rightCol: width - faceLocation.right_col * width,
      bottomRow: height - faceLocation.bottom_row * height,
    };
  };
  //console.log("FACE", calcFaceLocation());
  const displayBox = (boxer) => {
    console.log("boxer", boxer);
    Set_Box(boxer);
    console.log("Box", box);
  };

  const onInputChange = (event) => {
    Set_Input(event.target.value);
  };

  const onSubmitChange = (event) => {
    Set_Image(input);

    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      (response) => displayBox(calcFaceLocation(response))
      // .catch((err) => {
      //   console.log(err);
      // })
    );
  };

  const onRouteChange = (event) => {
    Set_Route(event);
  };

  return (
    <div className="Homepage">
      <Navigation onRouteChange={onRouteChange} />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onSubmitChange={onSubmitChange}
          />
          <FaceRecognition box={box} imageUrl={image} />
        </div>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
}
