import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import ImageLinkForm from "../../components/Form/ImageLinkForm";
import FaceRecognition from "../../components/Recognition/FaceRecognition";
import SignIn from "../../components/SignIn/SignIn";
import Rank from "../../components/Rank/Rank";
import Clarifai from "clarifai";
import Navigation from "../../components/Navigation/Navigation";
import LogIn from "../../components/LogIn/LogIn";
import { useDispatch } from "react-redux";

const app = new Clarifai.App({
  apiKey: "b4723ee82b5049b6a08801926886ff93",
});

export default function HomePage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, []);

  const [image, Set_Image] = useState("");
  const [input, Set_Input] = useState("");
  const [box, Set_Box] = useState({});
  const [route, Set_Route] = useState("signin");
  const [signedIn, Set_SignedIn] = useState(false);

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

  const displayBox = (boxer) => {
    Set_Box(boxer);
  };

  const onInputChange = (event) => {
    Set_Input(event.target.value);
  };

  const onSubmitChange = (event) => {
    Set_Image(input);

    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      (response) => displayBox(calcFaceLocation(response))

      //TODO below code creates an syntax/runtime error;
      // .catch((err) => {
      //   console.log(err);
      // })
    );
  };

  // ROUTE action
  const onRouteChange = (event) => {
    Set_Route(event);
    route === "signout" ? Set_SignedIn(false) : Set_SignedIn(true);
  };

  return (
    <div className="Homepage">
      <Navigation isSignedIn={signedIn} onRouteChange={onRouteChange} />
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
        <LogIn onRouteChange={onRouteChange} />
      ) : (
        <SignIn onRouteChange={onRouteChange} />
      )}
    </div>
  );
}
