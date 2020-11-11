import React, { useEffect, useState } from "react";
import ImageLinkForm from "../../components/Form/ImageLinkForm";
import FaceRecognition from "../../components/Recognition/FaceRecognition";
import Rank from "../../components/Rank/Rank";
import Clarifai from "clarifai";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "../LogIn/LogIn";
import { selectToken, selectUser } from "../../store/user/selectors";
import { addImage } from "../../store/image/actions";
import { useHistory } from "react-router-dom";

const app = new Clarifai.App({
  apiKey: "b4723ee82b5049b6a08801926886ff93",
});

export default function HomePage() {
  const getUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const [image, Set_Image] = useState("");
  const [input, Set_Input] = useState("");
  const [box, Set_Box] = useState({});

  // TODO
  // const captureLocation = (data) => {
  //   console.log("What is data", data);
  // };

  const calcFaceLocation = (data) => {
    // const allLocations = data.map((face, i) => {
    //   return face[i].region_info.bounding_box;
    // });
    // console.log("faces:", allLocations);
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

  const onSubmitChange = (id) => {
    Set_Image(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(
        (response) => displayBox(calcFaceLocation(response)),
        dispatch(addImage(input, id))
      );
    Set_Input("");
  };

  return (
    <div className="Homepage">
      {getUser.name === null ? (
        <div>
          <LogIn> </LogIn>
        </div>
      ) : (
        <div>
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onSubmitChange={() => {
              onSubmitChange(getUser.id);
            }}
          />
          <FaceRecognition box={box} imageUrl={image} />
        </div>
      )}
    </div>
  );
}
