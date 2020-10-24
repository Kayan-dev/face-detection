import React from "react";

export default function FaceRecognition(props) {
  return (
    <div className="center">
      <div className="absolute mt2">
        <img alt="" src={props.imageUrl} width="500px" height="auto" />
      </div>
    </div>
  );
}
