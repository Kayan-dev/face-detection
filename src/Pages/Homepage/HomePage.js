import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import ImageLinkForm from "../../components/Form/ImageLinkForm";
import FaceRecognition from "../../components/Recognition/FaceRecognition";
import Rank from "../../components/Rank/Rank";
import Clarifai from "clarifai";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "../LogIn/LogIn";
import SignIn from "../SignIn/SignIn";
import { selectUser } from "../../store/user/selectors";
import { addImage } from "../../store/image/actions";

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
      (response) => displayBox(calcFaceLocation(response)),
      dispatch(addImage(image))
      //TODO below code creates an syntax/runtime error;
      // .catch((err) => {
      //   console.log(err);
      // })
    );
  };

  const getUser = useSelector(selectUser);

  return (
    <div className="Homepage">
      {getUser.name === null ? (
        <div>
          <Logo />
          <LogIn> </LogIn>
        </div>
      ) : (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onSubmitChange={onSubmitChange}
          />
          <FaceRecognition box={box} imageUrl={image} />
        </div>
      )}
    </div>
  );
}
